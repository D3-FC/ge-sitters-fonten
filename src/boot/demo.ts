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
  }
}
