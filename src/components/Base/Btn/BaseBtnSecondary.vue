<template>
  <q-btn
    no-caps
    rounded
    unelevated
    dark-percentage
    :label="label"
    outline
    @click="$emit('click')"
  >
    <slot/>
  </q-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseBtnSecondary extends Vue {
  $refs: any
  @Prop(String) label?: string
}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
