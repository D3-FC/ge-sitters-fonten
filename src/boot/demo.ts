import { Container } from 'typedi'
import { AppConfig } from '../config/AppConfig'

export default async ({ app, Vue, router }: any) => {
  const config = Container.get(AppConfig)
  if (config.debug) {
    import('../components/Demo/demo.scss')
    const VueComponentTree = require('vue-book')
    Vue.use(VueComponentTree.VueBookComponents)
    router.addRoutes([
      VueComponentTree.createRoute({
        requireContext: require.context('./../components', true, /(.*).demo.vue$/),
        path: '/demo',
        hideFileExtensions: true
      })
    ])
    Vue.prototype.$logEvent = (...args: any[]) => {
      const err = new Error()
      const eventName: string | undefined = err.stack?.split('at')[2].split(' ')[1]
      console.info(`%c${eventName}`, 'color: #007478', ...args)
    }
  }
}
