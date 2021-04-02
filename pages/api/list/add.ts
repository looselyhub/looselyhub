import { NextApiRequest, NextApiResponse } from 'next'
import ErrorManager from 'services/ErrorManager'
import ServerUtils from 'services/ServerUtils'
import Mongo from 'services/Mongo'

async function addRow(
  adminUser: { _id: string },
  body: {
    url: string
    listLocation?: string
    parser: any
    color?: string
  }
) {
  const mongo = new Mongo()
  const requestBody: any = {
    url: body.url,

    parser: body.parser,
  }
  if (body.listLocation) {
    requestBody.listLocation = body.listLocation
  }
  if (body.color) {
    requestBody.color = body.color
  }
  return await mongo.insert('list_view', requestBody)
}

function validateBody(body: any) {
  ServerUtils.checkString('url', body.url)
  ServerUtils.checkString('listLocation', body.url)
  ServerUtils.checkArray('parser', body.parser)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authorization = req.headers.authorization
  try {
    const { body } = req
    const token = authorization.split(' ')[1]
    validateBody(body)
    const adminUser = await ServerUtils.getAdminUser(token)
    const response = await addRow(adminUser, body)
    res.status(200)
    return res.json({
      text: 'URL added!',
      url: `${process.env.NEXTAUTH_URL}/list/${response.ops[0]._id}`,
    })
  } catch (error) {
    if (error instanceof ErrorManager) {
      res.status(error.code)
      return res.json({ error: error.message })
    }
    res.status(402)
    return res.json({ error: 'Something went wrong!' })
  }
}
