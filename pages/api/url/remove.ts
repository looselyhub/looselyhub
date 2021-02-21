import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from '../../../services/ErrorManager'
import ServerUtils from '../../../services/ServerUtils'
import Mongo from '../../../services/Mongo'

function validateBody(body: any) {
  ServerUtils.checkString('username', body.username)
  ServerUtils.checkString('slug', body.slug)
}

async function removeRow(
  body: {
    slug: string
  },
  user?: { _id: string }
) {
  const mongo = new Mongo()
  if (user !== undefined) {
    return await mongo.delete('micro-saas', { user: user._id, slug: body.slug })
  }
  return await mongo.delete('micro-saas', { slug: body.slug })
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
        throw new ErrorManager('Username does not exist', 403)
      }
    }
    const slugExists = await ServerUtils.checkForSlug(adminUser, body, urlUser)
    if (!slugExists) {
      throw new ErrorManager('Slug does not exists for body!', 421)
    }
    await removeRow(body, urlUser)
    res.status(200)
    return res.json({ text: 'URL removed for username!' })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
