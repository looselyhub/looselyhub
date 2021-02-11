// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from '../../services/ErrorManager'
import Mongo from '../../services/Mongo'
import { getSession } from 'next-auth/client'
import { ObjectID } from 'mongodb'

async function addRow(
  user: {
    _id: string
    owner: string
    username: string
  },
  body: {
    eventName: string
    slug?: string
  }
) {
  const mongo = new Mongo()
  const requestBody = {
    name: body.eventName,
    slug: body.slug,
    createdAt: new Date(),
    user: user._id,
    owner: user.owner,
    username: user.username,
  }
  await mongo.insert('events', requestBody)
}

async function getUser(id: string) {
  const mongo = new Mongo()
  const response = await mongo.query('users', {
    _id: new ObjectID(id),
  })
  return response[0]
}

export const LoginLog = async (userId: string) => {
  const user = await getUser(userId)
  await addRow(user, { eventName: 'LOGIN' })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body } = req
    const session = await getSession({ req })
    if (!session) {
      throw new ErrorManager('Invalid session!', 401)
    }
    const user = await getUser(session.user.id)
    await addRow(user, body)
    res.statusCode = 200
    res.json({ name: 'Event Logged' })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
