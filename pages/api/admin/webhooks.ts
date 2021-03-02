import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import Webhooks from 'services/Webhooks'
import ServerUtils from 'services/ServerUtils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1]
    await ServerUtils.getAdminUser(token)
    const webhooks = new Webhooks()
    const response = await webhooks.get()
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
