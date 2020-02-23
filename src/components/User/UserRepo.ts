import { Inject, Service } from 'typedi'
import { TransformPlainToClass } from 'class-transformer'
import { ApiLaravelTransformable } from '@aeq/api-laravel'
import { AuthToken, BearerCredential, UserRepo as AuthUserRepo } from '@aeq/client-http-auth'
import { Config } from '../../config/config'
import { User } from './User'
import { UserQuery } from './UserQuery'

@Service()
export class UserRepo implements AuthUserRepo {
  @Inject()
  api!: ApiLaravelTransformable

  @Inject()
  cfg!: Config

  @TransformPlainToClass(AuthToken)
  async login (username: string, password: string): Promise<AuthToken> {
    const c = new BearerCredential({
      username,
      password,
      clientId: this.cfg.apiClientId,
      client_secret: this.cfg.apiClientSecret,
      remember_me: true
    })
    return this.api.post('oauth/token', c)
  }

  @TransformPlainToClass(User)
  async me (q: UserQuery = new UserQuery()): Promise<User> {
    return this.api.get('me', q)
  }

  @TransformPlainToClass(User)
  async register (user: User): Promise<User> {
    return this.api.post('register', user)
  }

  async resetPassword (email: string): Promise<void> {
    throw new Error('Implement me') // TODO: implement
  }

  async ping (): Promise<string> {
    return this.api.get('/ping')
  }
}
