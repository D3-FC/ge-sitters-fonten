<template>
  <VbDemo>
    <VbCard title="default">
      <BaseDialogModal>
        <template  v-slot:header="{headerClass}">
          <BaseDialogHeader close title="title" :class="headerClass"/>
        </template>
        <template v-slot="{contentClass}">
          <div :class="contentClass">
            Content
          </div>
        </template>
      </BaseDialogModal>

    </VbCard>
    <VbCard title="without slots">
      <BaseDialogModal
        close
        title="with build in title"
      >
        <template v-slot="{contentClass}">
          <div :class="contentClass">
            Content
          </div>
        </template>
      </BaseDialogModal>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseDialogModal from './BaseDialogModal.vue'
import BaseDialogHeader from './BaseDialogHeader.vue'

@Component({
  components: {
    BaseDialogHeader,
    BaseDialogModal
  }
})
export default class BaseDialogModalDemo extends Vue {

}
</script>
