import { Constructor, Fact } from '../../../factory/Fact'
import { User } from './User'

export class UserFact extends Fact<User> {
  entityClass: Constructor<User> = User

  one (config?: { type: string }): Partial<User> {
    return {
      name: this.faker.name.findName(),
      email: this.faker.internet.email(),
      phone: this.faker.phone.phoneNumber(),
      id: this.id()
    }
  }

}

export const theUserClass = new UserFact()
