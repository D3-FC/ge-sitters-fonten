<template>
  <BaseBtnProgress
    :form="executor"
    :isRunning="executor.isRunning"
    :was-last-run-bad="executor.wasLastRunBad"
    :was-last-run-fine="executor.wasLastRunFine"
    :was-run-count="executor.wasRunCount"
    @run="executor.run()"
    :text="text"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseBtnProgress from '../Btn/BaseBtnProgress.vue'
import { Runnable } from './Runnable'
@Component({
  components: { BaseBtnProgress }
})
export default class BaseFromButton extends Vue {
  $refs: any
  @Prop({
    required: true
  }) executor!: Runnable

  @Prop(String) text?: string
}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
