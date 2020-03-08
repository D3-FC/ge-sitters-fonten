<template>
  <span v-text="text"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { format } from 'quasar'

const { capitalize } = format
@Component
export default class BaseText extends Vue {
  $refs: any

  @Prop(String) value?: string
  @Prop(Boolean) capitalize?: boolean

  get text (): string {
    if (!this.value) return ''
    if (this.capitalize) {
      return capitalize(this.value)
    }
    return this.value
  }
}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
