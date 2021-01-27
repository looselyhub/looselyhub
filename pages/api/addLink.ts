import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from '../../services/ErrorManager'
import Mongo from '../../services/Mongo'

async function getAdminUser(token: string) {
  const mongo = new Mongo()
  const response = await mongo.query('users', { token })
  if (response.length === 1) {
    return response[0]
  }
  throw new ErrorManager('Invalid token', 401)
}

async function getURLUser(username: string) {
  const mongo = new Mongo()
  const response = await mongo.query('users', { username })
  if (response.length === 1) {
    return response[0]
  }
  throw new ErrorManager('Username not found', 411)
}

async function checkForSlug(
  adminUser: { _id: string },
  user: { _id: string },
  slug: string
) {
  const mongo = new Mongo()
  const response = await mongo.query('micro-saas', {
    owner: adminUser._id,
    user: user._id,
    slug,
  })
  if (response.length === 1) {
    throw new ErrorManager('Slug already used for user', 421)
  }
}

async function unsetOldHome(adminUser: { _id: string }, user: { _id: string }) {
  const mongo = new Mongo()
  await mongo.update(
    'micro-saas',
    { owner: adminUser._id, user: user._id, isHome: true },
    { isHome: false }
  )
}

async function addRow(
  adminUser: { _id: string },
  user: { _id: string },
  body: object
) {
  const mongo = new Mongo()
  await mongo.insert('micro-saas', {
    ...body,
    owner: adminUser._id,
    user: user._id,
    isHome: true,
  })
}

function checkString(key: string, value: any) {
  if (value === undefined || typeof value !== 'string') {
    throw new ErrorManager(`Invalid {${key}}. {${key}} must be string!`, 402)
  }
}

function validateBody(body: any) {
  checkString('title', body.title)
  checkString('url', body.url)
  checkString('username', body.username)
  checkString('slug', body.slug)
  if (body.isHome && typeof body.isHome !== 'boolean') {
    throw new ErrorManager('Invalid "isHome". "isHome" must be boolean!', 402)
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authorization = req.headers.authorization
  try {
    const { body } = req
    const token = authorization.split(' ')[1]
    validateBody(body)
    const adminUser = await getAdminUser(token)
    // DONE: Get user for username
    const urlUser = await getURLUser(body.username)
    // DONE: Check if slug exists
    await checkForSlug(adminUser, urlUser, body.slug)
    // DONE: Check if isHome true. YES check if already exists for user. YES change remove for url
    if (body.isHome) {
      await unsetOldHome(adminUser, urlUser)
    }
    // TODO: Create row for table link
    await addRow(adminUser, urlUser, body)
    res.status(200)
    return res.json({ text: 'URL adicionada com sucesso!' })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
