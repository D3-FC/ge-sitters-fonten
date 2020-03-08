<template>
  <QInput
    :error="hasError"
    :placeholder="placeholder"
    :type="isPwd ? 'password' : 'text'"
    dense
    hide-bottom-space
    no-error-icon
    outlined
    v-model="valueProxy"
    :tabindex="tabindex"
    autocomplete="off"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        @click="isPwd = !isPwd"
        class="cursor-pointer"
      />
    </template>
  </QInput>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { CanBeInsideField } from '../Field/CanBeInsideField'

@Component
export default class BaseInputPassword extends mixins(CanBeInsideField) {
  $refs: any

  @Prop(String) placeholder?: string
  @Prop(String) tabindex?: string

  @Prop({
    type: String,
    required: true
  }) value!: String

  isPwd = true

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
