import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import Mongo from 'services/Mongo'
import ServerUtils from 'services/ServerUtils'

async function addWebhook(
  adminUser: { _id: string },
  body: {
    externalId: string
    url: string
  }
) {
  const newBody = {
    ...body,
    createdAt: new Date(),
  }
  const mongo = new Mongo()
  const response = await mongo.update(
    'webhooks',
    { owner: adminUser._id, externalId: body.externalId },
    newBody,
    true
  )
  return response
}

function validateBody(body: { externalId: string; url: string }) {
  ServerUtils.checkString('externalId', body.externalId)
  ServerUtils.checkString('url', body.url)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authorization = req.headers.authorization
    const body = req.body
    const token = authorization.split(' ')[1]
    const adminUser = await ServerUtils.getAdminUser(token)
    validateBody(body)
    await addWebhook(adminUser, req.body)
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
