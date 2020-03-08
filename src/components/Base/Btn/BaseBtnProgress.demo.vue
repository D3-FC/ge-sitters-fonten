<template>
  <VbDemo>
    <VbCard title="default">
      <button
        @click="form.run()"
        type="button"
      >Run
      </button>
      <label>
        error
        <input
          type="checkbox"
          v-model="error"
        >
      </label>
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

  error = false
  form = new Form(this.runCmd, null)

  private async runCmd () {
    await sleep(2000)
    if (this.error) {
      throw new Error()
    }
  }
}
</script>
