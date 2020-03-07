<template>
  <div>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LoginForm from './LoginForm.vue'
@Component({
  components: { LoginForm }
})
export default class LoginPage extends Vue {
  $refs: any


}
</script>

<style lang="scss" module>
  .main {
    background-color: #21BA45;
  }
</style>
