import { Vue } from 'vue/types/vue'
import { I18nMessage } from '../i18n/I18nMessage'

declare module 'vue/types/vue' {
  interface Vue {
    $tr: (key: I18nMessage) => string
    $style: { [key: string]: string },
  }
}
