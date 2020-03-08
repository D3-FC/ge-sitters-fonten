<template>
  <VbDemo>
    <VbCard title="default">
      <LoginForm
        :value="user"
        :error="form.error"
      >

      </LoginForm>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginForm from './LoginForm.vue'
import { User } from '../User/User'
import { Form } from '@aeq/form'

@Component({
  components: {
    LoginForm
  }
})
export default class LoginFormDemo extends Vue {
  form = new Form(async () => {}, new User())
  user = new User()
}
</script>
