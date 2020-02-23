import { Service } from 'typedi'

@Service()
export class AppConfig {
  readonly apiUrl: string = process.env.API_URL || '/api'
  readonly assets: string = process.env.ASSETS_URL || '/'
  readonly apiClientId: string = process.env.CLIENT_ID || '2'
  readonly apiClientSecret: string = process.env.CLIENT_SECRET || 'none'
  readonly routerMode: 'history'|undefined = process.env.ROUTER_MODE as any
  readonly locale: string = process.env.DEFAULT_LOCALE || 'en'
  readonly debug: boolean = !!process.env.APP_DEBUG
}

export const config = new AppConfig()
