<template>
  <q-btn
    @click="$emit('click')"
    dense
    flat
    round
    color="primary"
    icon="close"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseBtnLinkCircle extends Vue {
  $refs: any

}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
