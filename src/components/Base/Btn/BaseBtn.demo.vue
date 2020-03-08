<template>
  <VbDemo>
    <VbCard title="custom width">
      <BaseBtn
        label="Send"
        style="width: 270px"
      >

      </BaseBtn>
    </VbCard>
    <VbCard title="negative">
      <BaseBtn
        color="negative"
        label="Button"
      >

      </BaseBtn>
    </VbCard>
    <VbCard title="secondary">
      <BaseBtnSecondary label="Button">

      </BaseBtnSecondary>
    </VbCard>
    <VbCard title="BaseBtnLink">
      <BaseBtnLink label="Back"/>
    </VbCard>
    <VbCard title="BaseBtnLinkCircle">
      <BaseBtnLinkCircle/>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseBtn from './BaseBtn.vue'
import BaseBtnLink from './BaseBtnLink.vue'
import BaseBtnLinkCircle from './BaseBtnLinkCircle.vue'
import BaseBtnSecondary from './BaseBtnSecondary.vue'

@Component({
  components: {
    BaseBtnSecondary,
    BaseBtnLinkCircle,
    BaseBtnLink,
    BaseBtn
  }
})
export default class BaseBtnDemo extends Vue {

}
</script>
