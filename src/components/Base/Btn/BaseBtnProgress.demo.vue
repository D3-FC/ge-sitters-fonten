<template>
  <VbDemo>
    <VbCard title="default">
      <button type="button" @click="form.run()">Run</button>
    </VbCard>
    <VbCard title="default">
      <BaseBtnProgress
        :form="form"
        :isRunning="form.isRunning"
        :was-last-run-bad="form.wasLastRunBad"
        :was-last-run-fine="form.wasLastRunFine"
        :was-run-count="form.wasRunCount"
        @run="form.run()"
        text="Text"
        type="button"
      >

      </BaseBtnProgress>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseBtnProgress from './BaseBtnProgress.vue'
import { Form } from '@aeq/form'
import { sleep } from '@aeq/promise'

@Component({
  components: {
    BaseBtnProgress
  }
})
export default class BaseBtnProgressDemo extends Vue {
  form = new Form(async () => {
    await sleep(2000)
    throw new Error()
  }, null)


}
</script>
