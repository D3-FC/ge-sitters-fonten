<template>
  <q-btn
    :label="label"
    :color="color"
    unelevated
    no-caps
  ><slot/></q-btn>
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

<style lang="scss" module>
  .main {

  }
</style>
