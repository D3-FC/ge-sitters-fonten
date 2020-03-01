<template>
  <q-btn
    :color="color"
    :label="label"
    no-caps
    rounded
    unelevated
  >
    <slot/>
  </q-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseBtn extends Vue {
  $refs: any
  @Prop(String) label?: string
  @Prop({
    type: String,
    default: 'primary'
  }) color?: string
}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
