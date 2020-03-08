export class Model<T> {
  merge (data: Partial<T>): T {
    Object.assign(this, data)
    //@ts-ignore
    return this as T
  }

}
