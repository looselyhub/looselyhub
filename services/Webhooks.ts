import Mongo from 'services/Mongo'
import axios from 'axios'

class Webhooks {
  private _mongo: Mongo
  constructor() {
    this._mongo = new Mongo()
  }

  async get() {
    const response = await this._mongo.query('webhooks', {})
    return response
  }

  async trigger(payload: any) {
    const webhooks = await this.get()
    webhooks.forEach((webhook) => axios.post(webhook.url, payload))
  }
}

export default Webhooks
