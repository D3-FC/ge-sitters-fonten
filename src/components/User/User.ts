import { User as AuthUser } from '@aeq/client-http-auth'

export class User implements AuthUser {
  id: string = ''
  name: string = ''
  phone: string = ''
  email: string = ''
  password: string = ''


  get username (): string {
    return this.email
  }

  set username (v: string) {
    this.email = v
  }

  constructor (data: Partial<User> = {}) {
    Object.assign(this, data)
  }
}
