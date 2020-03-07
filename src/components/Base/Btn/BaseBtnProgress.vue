<template>
  <base-btn
    @click.native="runCommand"
    class="form-button"
    tag="button"
    type="submit"
  >
    <span
      :class="{'form-button__container--hidden': cachedWasLastRunFine ||cachedWasLastRunBad}"
      class="form-button__container"
    ><slot>{{text}}</slot></span>

    <transition name="form-button-fade-long">
      <span
        class="form-button__overlay form-button__overlay--primary"
        v-if="isRunning"
      >
        ...
      </span>
    </transition>
    <transition name="form-button-fade">
      <span
        class="form-button__overlay form-button__overlay--success"
        v-if="cachedWasLastRunFine && !isRunning"
      >ok</span>
    </transition>
    <transition name="form-button-fade">
      <span
        class="form-button__overlay form-button__overlay--error"
        v-if="cachedWasLastRunBad && !isRunning"
      >!</span>
    </transition>
  </base-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import BaseBtn from './BaseBtn.vue'
import { Repeater } from '@aeq/executors'

@Component({
  components: { BaseBtn }
})
export default class BaseBtnProgress extends Vue {
  $refs: any

  @Prop({
    type: Boolean,
    required: true
  }) isRunning!: boolean

  @Prop({
    type: Boolean,
    required: true
  }) wasLastRunFine!: boolean

  @Prop({
    type: Boolean,
    required: true
  }) wasLastRunBad!: boolean

  @Prop({
    type: Number,
    required: true
  }) wasRunCount!: number

  @Prop(String) text?: string

  @Prop({
    type: String,
    default: 'submit'
  }) type!: string

  cachedWasLastRunFine = false
  cachedWasLastRunBad = false
  resetSuccessCommand = new Repeater(this.resetSuccess, 1000)
  resetErrorCommand = new Repeater(this.resetError, 1000)

  runCommand () {
    if (this.type === 'button') {
      this.$emit('run')
    }
  }

  resetSuccess () {
    this.cachedWasLastRunFine = false
  }

  resetError () {
    this.cachedWasLastRunBad = false
  }


  get buttonType () {
    if (!this.cachedWasLastRunFine || this.isRunning) return 'primary'
    if (this.cachedWasLastRunFine && !this.isRunning) return 'positive'
    if (this.cachedWasLastRunBad && !this.isRunning) return 'negative'
    return 'default'
  }

  onSuccess () {
    this.$emit('success')
    this.cachedWasLastRunFine = true
    this.resetSuccessCommand.refresh()
  }

  onError () {
    this.$emit('error')
    this.cachedWasLastRunBad = true
    this.resetErrorCommand.refresh()
  }

  @Watch('wasRunCount')
  handleCommand (count: number) {
    if (this.wasLastRunFine) this.onSuccess()
    if (!this.wasLastRunFine) this.onError()
  }
}
</script>

<style
  lang="scss"
>

.form-button {
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: #fff;

  &__spinner {
    font-size: 20px;
  }

  &__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    background-color: $green;
    z-index: 1;
    color: #fff;

    &--primary {
      background-color: $primary;
    }

    &--success {
      background-color: $positive;
    }

    &--error {
      background-color: $negative;
    }

    &--disabled {
      opacity: 0.8;
    }

  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    @include transition(color);

    &--hidden {
      color: transparent;
    }
  }
}

.form-button-fade-enter-active, .form-button-fade-leave-active {
  transition: opacity 0.3s ease;
}

.form-button-fade-enter, .form-button-fade-leave-to {
  opacity: 0;
}

.form-button-fade-long-enter-active {
  transition: opacity 0.3s ease;
}

.form-button-fade-long-leave-active {
  transition: opacity 0.7s ease;
}

.form-button-fade-long-enter, .form-button-fade-long-leave-to {
  opacity: 0;
}
</style>
