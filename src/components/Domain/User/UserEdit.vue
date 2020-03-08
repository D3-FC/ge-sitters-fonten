<template>
  <base-form :class="[$style.main]">

  </base-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseForm from '../../Base/Form/BaseForm.vue'
import BaseField from '../../Base/Field/BaseField.vue'
import BaseInputText from '../../Base/Input/BaseInputText.vue'

@Component({
  components: { BaseInputText, BaseField, BaseForm }
})
export default class UserEdit extends Vue {
  $refs: any

}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
