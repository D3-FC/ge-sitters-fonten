<template>
  <QBtn
    @click="$emit('click')"
    dark-percentage
    no-caps
    outline
    rounded
    unelevated
  >
    <BaseText
      :value="label"
      capitalize
    />
  </QBtn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseText from '../Text/BaseText.vue'

@Component({
  components: { BaseText }
})
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
