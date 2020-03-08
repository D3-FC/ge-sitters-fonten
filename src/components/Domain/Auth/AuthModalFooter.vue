<template>
  <div :class="[$style.main]">
    <BaseFromButton
      :executor="form"
      :text="primaryButtonText"
      class="full-width"
    />

    <p
      :class="$style.desc"
      v-text="t.desc"
    />

    <b
      :class="$style.question"
      v-text="question"
    ></b>

    <BaseBtnSecondary
      :class="$style.secondaryBtn"
      :label="secondaryButtonText"
      @click="$emit('secondaryButtonClick')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseFromButton from '../../Base/Form/BaseFromButton.vue'
import { Form } from '@aeq/form'
import BaseBtnSecondary from '../../Base/Btn/BaseBtnSecondary.vue'

@Component({
  components: { BaseBtnSecondary, BaseFromButton }
})
export default class AuthModalFooter extends Vue {
  $refs: any

  @Prop({
    type: Form,
    required: true
  }) form!: Form

  @Prop(String) primaryButtonText?: string
  @Prop(String) secondaryButtonText?: string
  @Prop(String) question?: string

  get t () {
    return {
      desc: this.$tr(
        'By logging in or registering, you agree to the terms of processing your personal data and the offer')
    }
  }
}
</script>

<style
  lang="scss"
  module
>
.main {
  $color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
}

.desc {
  @include padding-y(var(--space-xxl));
  text-align: center;
  margin: 0;
}

.question {
  padding-bottom: var(--space-md);
}

.secondaryBtn {

}
</style>
