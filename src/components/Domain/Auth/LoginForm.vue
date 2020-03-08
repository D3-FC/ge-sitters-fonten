<template>
  <div :class="[$style.main]">
    <BaseField
      :error="errors.email"
      :label="t.email"
    >
      <BaseInputText
        autofocus
        v-model="user.name"
      />
    </BaseField>
    <BaseField
      :error="errors.password"
      :label="t.password"
    >
      <BaseInputPassword v-model="user.password"/>
    </BaseField>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseField from '../../Base/Field/BaseField.vue'
import BaseInputText from '../../Base/Input/BaseInputText.vue'
import { User } from '../User/User'
import { FormError } from '@aeq/form'
import BaseInputPassword from '../../Base/Input/BaseInputPassword.vue'

@Component({
  components: { BaseInputPassword, BaseInputText, BaseField }
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

  user = this.value

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

  getData (): User {
    return this.user
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
