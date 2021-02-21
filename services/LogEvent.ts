import axios from 'axios'

class LogEvent {
  private path: string

  constructor() {
    this.path = '/api/event/log'
  }

  async logEvent(eventName: string, extra: object) {
    await axios.post(this.path, { ...extra, eventName })
  }

  async login(userId: string) {
    await this.logEvent('LOGIN', { userId })
  }

  async close() {
    await this.logEvent('CLOSE', {})
  }

  async pageView(slug: string) {
    await this.logEvent('SAAS OPEN', { slug })
  }
}

export default LogEvent
