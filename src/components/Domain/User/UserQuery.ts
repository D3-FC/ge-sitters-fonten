export class UserQuery {
  with: string[] = []

  withOrganizations (): this {
    this.with.push('organizations')
    return this
  }

  get include () {
    return this.with.join(',')
  }
}
