import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import Mongo from 'services/Mongo'
import ServerUtils from 'services/ServerUtils'

async function removeWebhook(
  adminUser: { _id: string },
  body: {
    externalId: string
  }
) {
  const mongo = new Mongo()
  const response = await mongo.delete('webhooks', {
    owner: adminUser._id,
    externalId: body.externalId,
  })
  return response
}

function validateBody(body: { externalId: string }) {
  ServerUtils.checkString('externalId', body.externalId)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authorization = req.headers.authorization
    const body = req.body
    const token = authorization.split(' ')[1]
    const adminUser = await ServerUtils.getAdminUser(token)
    validateBody(body)
    await removeWebhook(adminUser, req.body)
    res.statusCode = 200
    return res.json({ success: true })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
