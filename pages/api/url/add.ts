import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import ServerUtils from 'services/ServerUtils'
import Mongo from 'services/Mongo'
import Pusher from 'pusher'

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER,
  secret: process.env.PUSHER_SECRET,
  cluster: 'us2',
  useTLS: true,
})

async function addUser(adminUser: { _id: string }, username: string) {
  const mongo = new Mongo()
  await mongo.insert('users', {
    owner: adminUser._id,
    username: username,
    email: username,
    createdAt: new Date(),
  })
}

async function unsetOldHome(
  adminUser: { _id: string },
  user?: { _id: string }
) {
  const mongo = new Mongo()
  if (user) {
    await mongo.update(
      'micro-saas',
      { owner: adminUser._id, user: user._id, isHome: true },
      { isHome: false }
    )
  } else {
    await mongo.update(
      'micro-saas',
      { owner: adminUser._id, isHome: true },
      { isHome: false }
    )
  }
}

async function addRow(
  adminUser: { _id: string },
  body: {
    title: string
    url: string
    isHome: boolean
    showMenu?: boolean
    slug: string
    icon?: string
    gridTemplate?: string
  },
  user?: { _id: string }
) {
  const mongo = new Mongo()
  if (body.showMenu === undefined) {
    body.showMenu = true
  }
  const requestBody: any = {
    title: body.title,
    url: body.url,
    isHome: body.isHome,
    slug: body.slug,
    owner: adminUser._id,
    showMenu: body.showMenu,
    icon: body.icon,
    gridTemplate: body.gridTemplate,
  }
  if (user) {
    requestBody.user = user._id
    await mongo.update(
      'micro-saas',
      { user: user._id, slug: body.slug },
      requestBody,
      true
    )
  } else {
    await mongo.update('micro-saas', { slug: body.slug }, requestBody, true)
  }
}

function validateBody(body: any) {
  ServerUtils.checkString('title', body.title)
  ServerUtils.checkStringArray('url', body.url)
  if (body.isPublic !== true) {
    ServerUtils.checkString('username', body.username)
  }
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
    let urlUser
    if (body.isPublic !== true) {
      urlUser = await ServerUtils.getURLUser(body.username)
      if (urlUser === undefined) {
        urlUser = await addUser(adminUser, body.username)
      }
    }
    const slugExists = await ServerUtils.checkForSlug(adminUser, body, urlUser)
    if (slugExists) {
      throw new ErrorManager('Slug already used for user', 421)
    }
    if (body.isHome) {
      await unsetOldHome(adminUser, urlUser)
    }
    await addRow(adminUser, body, urlUser)
    pusher.trigger('saas-change', 'saas-change', {
      message: 'SAAS CHANGED',
    })
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
