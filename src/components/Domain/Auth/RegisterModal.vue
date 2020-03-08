<template>
  <BaseDialogModal
    :class="$style.main"
    :title="t.title"
    @close="$emit('close')"
    close
  >
    <template v-slot="{contentClass}">
      <BaseForm
        :class="contentClass"
        @submit="register.run()"
      >
        <template v-slot="{footerClass}">
          <UserEditor
            :error="register.error"
            :value="register.data"
            ref="editor"
          />
          <AuthModalFooter
            :class="footerClass"
            :form="register"
            :primary-button-text="t.register"
            :question="t.question"
            :secondary-button-text="t.login"
            @secondaryButtonClick="$emit('login')"
          />
        </template>
      </BaseForm>
    </template>
  </BaseDialogModal>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import BaseDialogModal from '../../Base/Dialog/BaseDialogModal.vue'
import BaseForm from '../../Base/Form/BaseForm.vue'
import { Form } from '@aeq/form/src/Form'
import { User } from '../User/User'
import AuthModalFooter from './AuthModalFooter.vue'
import UserEditor from '../User/UserEditor.vue'

@Component({
  components: { UserEditor, AuthModalFooter, BaseForm, BaseDialogModal }
})
export default class RegisterModal extends Vue {
  $refs!:{
    editor: UserEditor|any
  }

  register = new Form(this.registerCmd, new User())

  get t () {
    return {
      title: this.$tr('register new account'),
      login: this.$tr('login'),
      register: this.$tr('register'),
      question: this.$tr('Already have an account?')
    }
  }

  @Emit('register')
  async registerCmd (u: User) {
    return u
      .merge(this.$refs.editor.getData())
      .save()
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
