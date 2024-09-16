export class AppError {
  private _message:string
  private _statusCode: number

  constructor(message:string,statusCode: number = 400){
    this._message = message,
    this._statusCode = statusCode
  }

  public get message(){
    return this._message
  }

  public get statusCode(){
    return this._statusCode
  }
}