import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import Mongo from 'services/Mongo'
import ServerUtils from 'services/ServerUtils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authorization = req.headers.authorization
    const mongo = new Mongo()
    const token = authorization.split(' ')[1]
    const adminUser = await ServerUtils.getAdminUser(token)
    const response = await mongo.query('micro-saas', {
      owner: adminUser._id,
    })
    res.statusCode = 200
    return res.json(response)
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
