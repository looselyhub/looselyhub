import axios from 'axios'

interface SaasObject {
  title: string
  url: string
  _id: string
  user: string
}

class SaasList {
  private _list: SaasObject[]
  private _home: SaasObject

  constructor() {
    this._list = []
  }

  async fetchList() {
    const response = await axios.get('/api/fetchSaasList')
    const newList = []
    response.data.forEach((element) => {
      if (element.isHome) {
        this._home = element
      } else {
        newList.push(element)
      }
    })
    this._list = newList
  }

  getList() {
    return this._list
  }

  getHomeURL() {
    if (this._home) {
      return this._home.url
    }
    return ''
  }
}

export default SaasList
