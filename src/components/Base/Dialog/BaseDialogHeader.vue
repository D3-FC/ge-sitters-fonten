<template>
  <div :class="[$style.main]">
    <!--    <BaseBtnLink-->
    <!--      :label="t.back"-->
    <!--      @click="$emit('back')"-->
    <!--    />-->
    <h6
      :class="$style.title"
      v-text="title"
    />
    <BaseBtnLinkCircle
      :class="$style.btn"
      v-if="close"
      @click="$emit('close')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseBtnLink from '../Btn/BaseBtnLink.vue'
import BaseBtnLinkCircle from '../Btn/BaseBtnLinkCircle.vue'

@Component({
  components: { BaseBtnLinkCircle, BaseBtnLink }
})
export default class BaseDialogHeader extends Vue {
  $refs: any

  @Prop(String) title?: string
  @Prop(Boolean) close?: boolean

  get t () {
    return {
      back: this.$tr('Back')
    }
  }
}
</script>

<style
  lang="scss"
  module
>
.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title {
  margin: 0;

  &::first-letter {
    text-transform: uppercase;
  }
}

.btn {
  margin-right: -2.3rem;
}
</style>
