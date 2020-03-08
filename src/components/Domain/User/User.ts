import { User as AuthUser } from '@aeq/client-http-auth'
import { Model } from '../Model'

export class User extends Model<User> implements AuthUser {
  id: string = ''
  name: string = ''
  phone: string = ''
  email: string = ''
  password: string = ''
  password_confirmed: string = ''

  constructor (data: Partial<User> = {}) {
    super()
    Object.assign(this, data)
  }

  get username (): string {
    return this.email
  }

  set username (v: string) {
    this.email = v
  }
  async save () {
    console.warn('SAVE', this)
    //TODO
    return this
  }
}
