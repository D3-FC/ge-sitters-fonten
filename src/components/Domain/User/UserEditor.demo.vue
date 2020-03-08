<template>
  <VbDemo>
    <VbCard title="default">
      <UserEditor :error="form.error" :value="user">

      </UserEditor>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserEditor from './UserEditor.vue'
import { User } from './User'
import { Form } from '@aeq/form/src/Form'

@Component({
  components: {
    UserEditor
  }
})
export default class UserEditDemo extends Vue {
  user = new User()
  form = new Form(async ()=>{}, this.user)
}
</script>
