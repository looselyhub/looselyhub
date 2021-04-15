import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { ObjectID } from 'mongodb'
import Mongo from 'services/Mongo'
import ServerUtils from 'services/ServerUtils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  if (session) {
    res.statusCode = 200
    const mongo = new Mongo()
    let result = []
    const urlUser = await ServerUtils.getURLUser(session.user.email)
    const owner = urlUser.owner
    if (owner) {
      const extraResponse = await mongo.query('micro-saas', {
        owner: new ObjectID(owner),
        user: { $exists: false },
      })
      result = result.concat(extraResponse)
    } else {
      const extraResponse = await mongo.query('micro-saas', {
        user: { $exists: false },
      })
      result = result.concat(extraResponse)
    }
    const response = await mongo.query('micro-saas', {
      user: new ObjectID(session.user.id),
    })
    result = result.concat(response)
    result = result.map((microSaas) => {
      if (microSaas.showMenu === undefined) {
        microSaas.showMenu = true
      }
      return microSaas
    })
    return res.json(result)
  } else {
    // Not Signed in
    res.status(401)
  }
}
