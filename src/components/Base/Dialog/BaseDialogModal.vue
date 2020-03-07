<template>
  <q-card class="BaseDialogModal" :class="$style.main"  style="width: 700px; max-width: 80vw;">
    <slot name="header" :headerClass="$style.header">
      <BaseDialogHeader
        :class="$style.header"
        :title="title"
        :close="close"
        @close="$emit('close')"
      />
    </slot>
    <slot :contentClass="$style.content"/>
  </q-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseDialogHeader from './BaseDialogHeader.vue'
@Component({
  components: { BaseDialogHeader }
})
export default class BaseDialogModal extends Vue {
  $refs: any

  @Prop({
    type: Boolean,
    default: false
  }) value!: boolean

  @Prop(String) title?: string
  @Prop(Boolean) close?: boolean

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
.content{
  padding: var(--space-xl);
}
.header{
  padding: var(--space-md) var(--space-xl);
}
</style>

<style lang="scss">
    .BaseDialogModal{
      &.q-card{
        border-radius: 14px;
      }
    }
</style>
