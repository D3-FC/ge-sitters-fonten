<template>
  <VbDemo>
    <VbCard title="default">
      <BaseField
        label="label"
        error="error text"
      >
        <BaseInputText v-model="text"/>
      </BaseField>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseField from './BaseField.vue'
import BaseInputText from '../Input/BaseInputText.vue'

@Component({
  components: {
    BaseInputText,
    BaseField
  }
})
export default class BaseFieldDemo extends Vue {
  text = ''
}
</script>
