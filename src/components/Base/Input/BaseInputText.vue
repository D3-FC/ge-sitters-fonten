<template>
  <q-input
    outlined
    v-model="valueProxy"
    dense
    :error="hasError"
    no-error-icon
    hide-bottom-space
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { CanBeInsideField } from '../Field/CanBeInsideField'

@Component
export default class BaseInputText extends mixins(CanBeInsideField) {
  $refs: any

  @Prop({
    type: String,
    required: true
  }) value!: String

  @Prop(String) placeholder?: string

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
