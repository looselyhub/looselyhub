import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { ObjectID } from 'mongodb'
import Mongo from '../../services/Mongo'
import ServerUtils from '../../services/ServerUtils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  if (session) {
    res.statusCode = 200
    const mongo = new Mongo()
    const response = await mongo.query('micro-saas', {
      user: new ObjectID(session.user.id),
    })
    const urlUser = await ServerUtils.getURLUser(session.user.email)
    const owner = urlUser.owner
    if (owner) {
      const extraResponse = await mongo.query('micro-saas', {
        owner: new ObjectID(owner),
        user: { $exists: false },
      })
      return res.json(response.concat(extraResponse))
    }
    return res.json(response)
  } else {
    // Not Signed in
    res.status(401)
  }
}
