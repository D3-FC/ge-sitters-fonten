<template>
  <q-form @submit="$emit('submit', $event)">
    <slot/>
  </q-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseForm extends Vue {
  $refs: any

}
</script>
