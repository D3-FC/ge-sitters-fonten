<template>
  <div :class="[$style.main]">
    <BaseField
      :error="errors.name"
      :label="t.name"
    >
      <BaseInputText autofocus v-model="user.name"/>
    </BaseField>
    <BaseField
      :error="errors.email"
      :label="t.email"
    >
      <BaseInputText type="email"  v-model="user.email"/>
    </BaseField>
    <BaseField
      :error="errors.phone"
      :label="t.phone"
    >
      <BaseInputText v-model="user.phone"/>
    </BaseField>
    <BaseField
      :error="errors.password"
      :label="t.password"
    >
      <BaseInputPassword v-model="user.password"/>
    </BaseField>
    <BaseField
      :error="errors.password_confirmed"
      :label="t.password_confirmed"
    >
      <BaseInputPassword v-model="user.password_confirmed"/>
    </BaseField>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseForm from '../../Base/Form/BaseForm.vue'
import BaseField from '../../Base/Field/BaseField.vue'
import BaseInputText from '../../Base/Input/BaseInputText.vue'
import { User } from './User'
import { FormError } from '@aeq/form'
import BaseInputPassword from '../../Base/Input/BaseInputPassword.vue'

@Component({
  components: { BaseInputPassword, BaseInputText, BaseField, BaseForm }
})
export default class UserEdit extends Vue {
  $refs: any

  @Prop({
    type: User,
    required: true
  }) value!: User

  @Prop({
    type: FormError,
    required: true
  }) error!: FormError

  user: User = this.value

  get errors (): Partial<User> {
    return {
      name: this.error.getError('email'),
      phone: this.error.getError('password'),
      email: this.error.getError('email'),
      password: this.error.getError('password'),
      password_confirmed: this.error.getError('password_confirmed'),
    }
  }

  get t () {
    return {
      name: this.$tr('name'),
      email: this.$tr('email'),
      phone: this.$tr('phone'),
      password: this.$tr('password'),
      password_confirmed: this.$tr('password confirmed'),
    }
  }

  public getData(): User{
    return this.user
  }
}
</script>

<style
  lang="scss"
  module
>
.main {

}
</style>
