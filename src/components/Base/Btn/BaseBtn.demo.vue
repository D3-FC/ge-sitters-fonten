<template>
  <VbDemo>
    <VbCard title="custom width">
      <BaseBtn style="width: 270px" label="Send">

      </BaseBtn>
    </VbCard>
    <VbCard title="negative">
      <BaseBtn color="negative" label="Button">

      </BaseBtn>
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseBtn from './BaseBtn.vue'
import BaseBtnLink from './BaseBtnLink.vue'
import BaseBtnLinkCircle from './BaseBtnLinkCircle.vue'

@Component({
  components: {
    BaseBtnLinkCircle,
    BaseBtnLink,
    BaseBtn
  }
})
export default class BaseBtnDemo extends Vue {

}
</script>
