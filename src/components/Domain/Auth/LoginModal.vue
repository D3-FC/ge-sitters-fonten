<template>
  <BaseDialogModal
    :class="$style.main"
    :title="t.title"
    @close="$emit('close')"
    close
  >
    <template v-slot="{contentClass}">
      <base-form
        :class="contentClass"
        @submit="login.run()"
      >
        <template v-slot="{footerClass}">
          <login-form
            :error="login.error"
            :value="login.data"
            ref="login"
          >
          </login-form>
          <AuthModalFooter
            :class="footerClass"
            :form="login"
            :primary-button-text="t.login"
            :secondary-button-text="t.register"
            :question="t.question"
            @secondaryButtonClick="$emit('register')"
          />
        </template>
      </base-form>
    </template>
  </BaseDialogModal>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import BaseDialogModal from '../../Base/Dialog/BaseDialogModal.vue'
import LoginForm from './LoginForm.vue'
import { Form } from '@aeq/form'
import { User } from '../User/User'
import BaseFromButton from '../../Base/Form/BaseFromButton.vue'
import BaseForm from '../../Base/Form/BaseForm.vue'
import AuthModalFooter from './AuthModalFooter.vue'
import { Auth } from '@aeq/client-http-auth/src/Auth'

@Component({
  components: { AuthModalFooter, BaseForm, BaseFromButton, LoginForm, BaseDialogModal }
})
export default class LoginModal extends Vue {
  $refs!: {
    login: LoginForm | any
  }

  login = new Form(this.loginCmd, new User())


  get t () {
    return {
      title: this.$tr('authorize'),
      login: this.$tr('login'),
      register: this.$tr('register'),
      question: this.$tr('Do not have account?')
    }
  }

  public getData () {
    return this.$refs.login.getData()
  }

  @Emit('login')
  async loginCmd (u: User) {
    return u; //TODO
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
