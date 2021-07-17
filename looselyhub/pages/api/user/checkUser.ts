import { NextApiRequest, NextApiResponse } from 'next'
import ServerUtils from 'services/ServerUtils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req
  const authorizedDomains = JSON.parse(process.env.AUTHORIZED_DOMAINS)
  if (authorizedDomains.includes(body.email.split('@')[1])) {
    res.status(200)
    return res.json({ exists: true })
  }
  const urlUser = await ServerUtils.getURLUser(body.email)
  if (urlUser !== undefined) {
    res.status(200)
    return res.json({ exists: true })
  }
  res.status(401)
  return res.json({ error: 'User does not exists!' })
}

export default handler
