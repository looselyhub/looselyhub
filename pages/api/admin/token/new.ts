import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import Mongo from 'services/Mongo'

function makeid(length) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~+/'
  const charactersLength = characters.length
  for (let i = 0; i < length - 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result + '='
}

function validateAuthorization(authorization) {
  const reqToken = authorization.split(' ')
  if (reqToken[0] !== 'Basic') {
    throw new ErrorManager('Invalid authentication format!', 401)
  }
  const buff = Buffer.from(reqToken[1], 'base64')
  const text = buff.toString('ascii').split(':')
  const username = text[0]
  const password = text[1]
  if (username !== process.env.EMAIL_USERNAME) {
    throw new ErrorManager('Invalid username!', 401)
  }
  if (password !== process.env.EMAIL_PASSWORD) {
    throw new ErrorManager('Invalid password!', 401)
  }
  return username
}

async function addRow(username: string, token: string) {
  const mongo = new Mongo()
  await mongo.update('users', {}, { email: username, username, token }, true)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authorization = req.headers.authorization
    const username = validateAuthorization(authorization)
    const token = makeid(64)
    await addRow(username, token)
    return res.json({ token: token })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
