import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from '../../services/ErrorManager'
import ServerUtils from '../../services/ServerUtils'
import Mongo from '../../services/Mongo'

async function addUser(adminUser: { _id: string }, username: string) {
  const mongo = new Mongo()
  await mongo.insert('users', {
    owner: adminUser._id,
    username: username,
    email: username,
    createdAt: new Date(),
  })
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
  body: {
    title: string
    url: string
    isHome: boolean
    slug: string
  }
) {
  const mongo = new Mongo()
  const requestBody = {
    title: body.title,
    url: body.url,
    isHome: body.isHome,
    slug: body.slug,
    owner: adminUser._id,
    user: user._id,
  }
  await mongo.update(
    'micro-saas',
    { user: user._id, slug: body.slug },
    requestBody,
    true
  )
}

function validateBody(body: any) {
  ServerUtils.checkString('title', body.title)
  ServerUtils.checkString('url', body.url)
  ServerUtils.checkString('username', body.username)
  ServerUtils.checkString('slug', body.slug)
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
    const adminUser = await ServerUtils.getAdminUser(token)
    let urlUser = await ServerUtils.getURLUser(body.username)
    if (urlUser === undefined) {
      urlUser = await addUser(adminUser, body.username)
    }
    const slugExists = await ServerUtils.checkForSlug(adminUser, urlUser, body)
    if (slugExists) {
      throw new ErrorManager('Slug already used for user', 421)
    }
    if (body.isHome) {
      await unsetOldHome(adminUser, urlUser)
    }
    await addRow(adminUser, urlUser, body)
    res.status(200)
    return res.json({ text: 'URL added for username!' })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
