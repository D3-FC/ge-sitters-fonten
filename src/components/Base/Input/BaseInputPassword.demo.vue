<template>
  <VbDemo>
    <VbCard title="default">
      <BaseInputPassword tabindex="3" v-model="password">

      </BaseInputPassword>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseInputPassword from './BaseInputPassword.vue'

@Component({
  components: {
    BaseInputPassword
  }
})
export default class BaseInputPasswordDemo extends Vue {
  password = 'password'
}
</script>
