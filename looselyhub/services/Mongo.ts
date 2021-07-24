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
    return this._client.db()
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

  async insert(table: string, newRow: object) {
    const db = await this.connect()
    try {
      const result = await db.collection(table).insertOne(newRow)
      return result
    } finally {
      this.close()
    }
  }

  async update(
    table: string,
    query: object,
    newValues: object,
    upsert = false
  ) {
    const db = await this.connect()
    try {
      const result = await db
        .collection(table)
        .update(query, { $set: newValues }, { upsert })
      return result
    } finally {
      this.close()
    }
  }

  async delete(table: string, query: object) {
    const db = await this.connect()
    try {
      const result = await db.collection(table).deleteOne(query)
      return result
    } finally {
      this.close()
    }
  }
}

export default Mongo
