import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export class AutofocusInputMixin extends Vue {
  $refs!: any

  @Prop(Boolean) autofocus?: boolean

  async mounted () {
    if (this.autofocus) {
      await this.$nextTick() // NOTE: after page refresh mounted triggers to early
      this.$refs.input.focus()
    }
  }
}
