<template>
  <component
    :is="tag"
    :class="classes"

  >
    <label
      :class="$style.label"
      v-if="label && showLabel"
      :for="forId"
    >
      <span :class="$style.text">{{label}}</span>
      <span :class="[$style.text, $style.link]"><slot name="link"/></span>
    </label>
    <slot/>
    <span
      :class="[$style.text, $style.errorText]"
      v-if="error"
    >{{error}}</span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BaseFieldContract } from './BaseFieldContract'

let fieldId = 1

@Component({
  provide () {
    return {
      BaseField: this
    }
  }
})
export default class BaseField extends Vue implements BaseFieldContract {
  $refs: any

  @Prop({
    type: String,
    default: 'div'
  })
  tag!: string

  @Prop(String)
  error!: string

  @Prop(String)
  label!: string

  showLabel = true

  public get id (): string {
    return `${this.constructor.name}-${fieldId++}`
  }

  public get hasError (): boolean {
    return !!this.error
  }

  get forId () {
    return this.id
  }

  get classes () {
    const classes = [this.$style.main]
    if (this.error) {
      classes.push(this.$style.error)
    }
    return classes
  }

  public hideLabel (): void {
    this.showLabel = false
  }
}
</script>

<style
  lang="scss"
  module
>

.main {
  display: block;

  & + & {
    margin-top: map_get($space-md, 'x');
  }
}

.text {
  font-family: Roboto;
  font-size: 0.75rem;
  line-height: 14px;
  color: $dark;
  padding-bottom: 0.25rem;
  @include transition(color);
  display: block;

  &::first-letter {
    text-transform: uppercase;
  }
}

.label {
  display: flex;
  justify-content: space-between;
}

.link {
  padding-left: 0.25rem;
}

.errorText {
  padding-top: 4px;
  font-size: 0.75rem;
}

.error {
  .text {
    color: $negative;
  }
}
</style>
