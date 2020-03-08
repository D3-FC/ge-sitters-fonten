<template>
  <VbDemo>
    <VbCard title="default">
      <RegisterModal
        @register="$logEvent($event)"
        @login="$logEvent($event)"
        @close="$logEvent($event)"
        :form="register"
      >

      </RegisterModal>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import RegisterModal from './RegisterModal.vue'
import { Form } from '@aeq/form'
import { User } from '../User/User'

@Component({
  components: {
    RegisterModal
  }
})
export default class RegisterModalDemo extends Vue {
  register = new Form(async () => {}, new User())
}
</script>
