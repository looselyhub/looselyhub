class ErrorManager {
  private _code: number
  private _message: string

  constructor(message, code) {
    this._message = message
    this._code = code
  }

  get code() {
    return this._code
  }

  get message() {
    return this._message
  }
}

export default ErrorManager
