<template>
  <q-btn
    class="BaseBtnLink"
    :class="$style.main"
    unelevated
    no-caps
    color="white"
    text-color="dark"
    dense
    @click="$emit('click')"
  >
    <q-icon left name="chevron_left"/>
    {{label}}
  </q-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseBtnLink extends Vue {
  $refs: any
  @Prop(String) label?: string
}
</script>

<style lang="scss" module>
  .main {
    padding: 0 $button-padding-x 0 0;
  }
</style>

<style lang="scss">
  .BaseBtnLink{
    .q-btn__wrapper{
      padding: 0;
    }
  }
</style>
