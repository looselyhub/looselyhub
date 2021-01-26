import { MongoClient } from 'mongodb'

class Mongo {
  private _url: string
  private _client: any
  constructor() {
    this._url = process.env.DATABASE_URL
  }

  async close() {
    this._client.close()
  }

  async connect() {
    this._client = await MongoClient.connect(this._url, {
      useNewUrlParser: true,
    })
    return this._client.db('looselyhub')
  }

  async query(table: string, query: object) {
    const db = await this.connect()
    try {
      const result = await db.collection(table).find(query).toArray()
      return result
    } finally {
      this.close()
    }
  }
}

export default Mongo
