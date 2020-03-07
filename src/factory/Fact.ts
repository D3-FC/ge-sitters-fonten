import faker from 'faker'

export type Constructor<Entity> = new (...args: any[]) => Entity
type DTO = { [key: string]: any }
type T<Entity> = (data: Partial<Entity>) => Partial<Entity>

export abstract class Fact<Entity, Config = { type: string }> {
  abstract one (config?: Config): Partial<Entity>

  abstract entityClass: Constructor<Entity>

  faker = faker

  id () {
    return this.faker.random.alphaNumeric(10)
  }

  image (width: number = 500, height: number = 500) {
    return `https://picsum.photos/${width}/${height}`
  }

  make (data: Partial<Entity> | ((data: Partial<Entity>) => Partial<Entity>) = {}, config?: Config): Entity {
    const one = this.one(config)
    let dataProxy = {}
    if (typeof data === 'function') {
      dataProxy = data(one)
    }
    else {
      dataProxy = data
    }
    return new this.entityClass({
      ...one,
      ...dataProxy
    })
  }

  makeMany (length = 5, data: Partial<Entity> | ((data: Partial<Entity>) => Partial<Entity>) = {}): Entity[] {
    return Array.from({ length }).map(() => {

      return this.make(data)
    })
  }
}
