import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import { ObjectID } from 'mongodb'
import Mongo from 'services/Mongo'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  try {
    const mongo = new Mongo()
    const queryResponse = await mongo.query('list_view', {
      _id: new ObjectID(id),
    })
    res.statusCode = 200
    return res.json(queryResponse[0].color)
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
