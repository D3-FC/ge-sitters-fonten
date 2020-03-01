import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})

export default ({ app, Vue }: any) => {
  // Set i18n instance on app
  app.i18n = i18n
  Vue.prototype.$tr = (...args: any) => i18n.t(args)
}

export { i18n }
