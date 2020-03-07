import { Auth } from '@aeq/client-http-auth'
import { User } from '../components/Domain/User/User'
import { Service } from 'typedi'

@Service()
class GlobalStore {
  auth!: Auth<User>
}

export {
  GlobalStore
}
