<template>
  <VbDemo>
    <VbCard title="default">
      <UserEdit>

      </UserEdit>
    </VbCard>
  </VbDemo>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserEdit from './UserEdit.vue'

@Component({
  components: {
    UserEdit
  }
})
export default class UserEditDemo extends Vue {

}
</script>
