<template>
  <VbDemo>
    <VbCard title="default">
      <BaseDialogHeader
        @close="$logEvent()"
        style="width: 700px"
        title="title"
        close
      >

      </BaseDialogHeader>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseDialogHeader from './BaseDialogHeader.vue'

@Component({
  components: {
    BaseDialogHeader
  }
})
export default class BaseDialogHeaderDemo extends Vue {

}
</script>
