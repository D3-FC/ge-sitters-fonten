<template>
  <QCard
    :class="$style.main"
    class="BaseDialogModal"
    style="width: 700px; max-width: 80vw;"
  >
    <slot
      :headerClass="$style.header"
      name="header"
    >
      <BaseDialogHeader
        :class="$style.header"
        :close="close"
        :title="title"
        @close="$emit('close')"
      />
    </slot>
    <slot :contentClass="$style.content"/>
  </QCard>
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

.content {
  padding: var(--space-xxl);
}

.header {
  padding: var(--space-md) var(--space-xxl);

  + .content {
    padding-top: var(--space-md);
  }
}
</style>

<style lang="scss">
.BaseDialogModal {
  &.q-card {
    border-radius: 14px;
  }
}
</style>
