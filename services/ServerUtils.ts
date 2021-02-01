import ErrorManager from './ErrorManager'
import Mongo from './Mongo'

class ServerUtils {
  static async getAdminUser(token: string) {
    const mongo = new Mongo()
    const response = await mongo.query('users', { token })
    if (response.length === 1) {
      return response[0]
    }
    throw new ErrorManager('Invalid token', 401)
  }

  static async getURLUser(username: string) {
    const mongo = new Mongo()
    const response = await mongo.query('users', { username })
    if (response.length === 1) {
      return response[0]
    }
    return undefined
  }

  static async checkForSlug(
    adminUser: { _id: string },
    user: { _id: string },
    body: {
      slug: string
      overwrite: boolean
    }
  ) {
    const mongo = new Mongo()
    const response = await mongo.query('micro-saas', {
      owner: adminUser._id,
      user: user._id,
      slug: body.slug,
    })
    if (response.length === 1 && !body.overwrite) {
      return true
    }
    return false
  }

  static checkString(key: string, value: any) {
    if (value === undefined || typeof value !== 'string') {
      throw new ErrorManager(`Invalid {${key}}. {${key}} must be string!`, 402)
    }
  }
}

export default ServerUtils
