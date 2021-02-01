import axios from 'axios'

interface SaasObject {
  title: string
  url: string
  _id: string
  user: string
  slug: string
  isHome: boolean
}

class SaasList {
  private _list: {
    [key: string]: SaasObject
  }
  private _home: SaasObject

  constructor() {
    this._list = {}
  }

  async fetchList() {
    const response = await axios.get('/api/fetchSaasList')
    response.data.forEach((element: SaasObject) => {
      if (element.isHome) {
        this._home = element
      } else {
        this._list[element.slug] = element
      }
    })
  }

  getURLForSlug(path: string) {
    const slug = path.replace('/', '')
    if (slug === 'home' && this._home) {
      return this._home.url
    } else if (Object.keys(this._list).length > 0 && this._list[slug]) {
      return this._list[slug].url
    }
    return ''
  }

  getList() {
    return Object.keys(this._list).map((key) => this._list[key])
  }
}

export default SaasList
