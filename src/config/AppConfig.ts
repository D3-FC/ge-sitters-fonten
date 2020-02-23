import { Service } from 'typedi'

@Service()
export class AppConfig {
  readonly apiUrl: string = process.env.API_URL || '/api'
  readonly assets: string = process.env.ASSETS_URL || '/'
  readonly apiClientId: string = process.env.CLIENT_ID || '2'
  readonly apiClientSecret: string =process.env.CLIENT_SECRET || 'none'
  readonly routerMode: string =process.env.VUE_ROUTER_MODE || 'history'
  readonly locale: string =process.env.DEFAULT_LOCALE || 'en'
}

export const config = new AppConfig()
