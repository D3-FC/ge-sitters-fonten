<template>
  <base-form :class="[$style.main]">
    <base-field
      :error="errors.email"
      :label="t.email"
    >
      <base-input-text v-model="user.name"/>
    </base-field>
    <base-field
      :error="errors.password"
      :label="t.password"
    >
      <base-input-text v-model="user.password"/>
    </base-field>
  </base-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseForm from '../../Base/Form/BaseForm.vue'
import BaseField from '../../Base/Field/BaseField.vue'
import BaseInputText from '../../Base/Input/BaseInputText.vue'
import { User } from '../User/User'
import { FormError } from '@aeq/form'

@Component({
  components: { BaseInputText, BaseField, BaseForm }
})
export default class LoginForm extends Vue {
  $refs: any

  @Prop({
    type: User,
    required: true
  }) value!: User

  @Prop({
    type: FormError,
    required: true
  }) error!: FormError

  user: User | null = null

  get t () {
    return {
      email: this.$tr('email'),
      password: this.$tr('password'),
    }
  }

  get errors (): Partial<User> {
    return {
      email: this.error.getError('email'),
      password: this.error.getError('password'),
    }
  }

  created () {
    this.user = this.value
  }
}
</script>

<style
  lang="scss"
  module
>
.login-form {

}
</style>
