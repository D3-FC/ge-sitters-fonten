<template>
  <VbDemo>
    <VbCard title="default">
      <LoginModal
        :form="login"
        @close="$logEvent()"
        @login="$logEvent()"
        @register="$logEvent()"
      />
    </VbCard>

  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginModal from './LoginModal.vue'
import { User } from '../User/User'
import { Form } from '@aeq/form'

@Component({
  components: {
    LoginModal
  }
})
export default class LoginModalDemo extends Vue {

  login = new Form(async () => {}, new User())

}
</script>
