<template>
  <VbDemo>
    <VbCard title="default">
      <BaseInputText
        v-model="text"
        placeholder="placeholder"
      >

      </BaseInputText>
    </VbCard>
    <VbCard title="error">
      <BaseInputText
        v-model="text"
        error="AAA"
      >

      </BaseInputText>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInputText from './BaseInputText.vue'

@Component({
  components: {
    BaseInputText
  }
})
export default class BaseInputTextDemo extends Vue {
  text = 'aaa'
}
</script>
