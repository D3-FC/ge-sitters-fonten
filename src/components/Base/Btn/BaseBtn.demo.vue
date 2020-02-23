<template>
  <VbDemo>
    <VbCard title="custom width">
      <BaseBtn style="width: 270px" label="Send">

      </BaseBtn>
    </VbCard>
    <VbCard title="">
      <BaseBtn color="negative" label="Button">

      </BaseBtn>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseBtn from './BaseBtn.vue'

@Component({
  components: {
    BaseBtn
  }
})
export default class BaseBtnDemo extends Vue {

}
</script>
