import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from '../../services/ErrorManager'
import ServerUtils from '../../services/ServerUtils'
import Mongo from '../../services/Mongo'

async function getEvents(admin: { _id }, usernames?: Array<string>) {
  const mongo = new Mongo()
  if (usernames.length) {
    const response = await mongo.query('events', {
      owner: admin._id,
      username: { $in: usernames },
    })
    return response
  } else {
    const response = await mongo.query('events', {
      owner: admin._id,
    })
    return response
  }
}

interface EventType {
  _id: string
  user: string
  username: string
  name: string
  slug?: string
  createdAt: Date
}

function createCSV(events: Array<EventType>) {
  let result = 'id,user,username,name,slug,createdAt\n'
  events.forEach((event) => {
    result += `${event._id},`
    result += `${event.user},`
    result += `${event.username},`
    result += `${event.name},`
    result += `${event.slug},` || ','
    result += `${JSON.stringify(event.createdAt)}\n`
  })
  return result
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authorization = req.headers.authorization
  try {
    const { body } = req
    const format = body.format || 'JSON'
    const usernames = body.usernames || undefined
    const token = authorization.split(' ')[1]
    const adminUser = await ServerUtils.getAdminUser(token)
    const events = await getEvents(adminUser, usernames)
    switch (format) {
      case 'CSV':
        res.setHeader('Content-disposition', 'attachment; filename=export.csv')
        res.setHeader('Content-Type', 'text/csv')
        return res.status(200).json(createCSV(events))
      default:
        return res.status(200).json(events)
    }
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
