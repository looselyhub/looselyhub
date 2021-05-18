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

  static async getURLUser(email: string) {
    const mongo = new Mongo()
    const response = await mongo.query('users', { email })
    if (response.length === 1) {
      return response[0]
    }
    return undefined
  }

  static async checkForSlug(
    adminUser: { _id: string },
    body: {
      slug: string
      overwrite: boolean
      isPublic?: boolean
    },
    user?: { _id: string }
  ) {
    const mongo = new Mongo()
    if (user) {
      const response = await mongo.query('micro-saas', {
        owner: adminUser._id,
        user: user._id,
        slug: body.slug,
      })
      if (response.length === 1 && !body.overwrite) {
        return true
      }
    } else {
      const response = await mongo.query('micro-saas', {
        owner: adminUser._id,
        slug: body.slug,
      })
      if (response.length === 1 && (!body.overwrite || body.isPublic)) {
        return true
      }
    }
    return false
  }

  static checkString(key: string, value: any) {
    if (value === undefined || typeof value !== 'string') {
      throw new ErrorManager(`Invalid {${key}}. {${key}} must be string!`, 402)
    }
  }

  static checkStringArray(key: string, value: any) {
    if (
      value === undefined ||
      (typeof value !== 'string' && !Array.isArray(value))
    ) {
      throw new ErrorManager(`Invalid {${key}}. {${key}} must be string!`, 402)
    }
  }

  isArray

  static checkArray(key: string, value: any) {
    if (value === undefined || typeof value !== 'object') {
      throw new ErrorManager(
        `Invalid {${key}}. {${key}} must be an object!`,
        402
      )
    }
  }
}

export default ServerUtils
