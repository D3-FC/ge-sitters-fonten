<template>
  <form @submit="$emit('submit', $event)">
    <slot :footerClass="$style.footer"/>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseForm extends Vue {
  $refs: any

}
</script>

<style
  lang="scss"
  module
>
.footer {
  margin-top: var(--space-xxl);
}
</style>
