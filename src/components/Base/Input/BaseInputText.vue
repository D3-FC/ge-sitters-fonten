<template>
  <q-input
    outlined
    v-model="valueProxy"
    dense
    :error-message="error"
    :error="!!error"
    no-error-icon
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseInputText extends Vue {
  $refs: any

  @Prop({
    type: String,
    required: true
  }) value!: String

  @Prop(String) error?: string

  get valueProxy () {
    return this.value
  }

  set valueProxy (v: any) {
    this.$emit('input', v)
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
