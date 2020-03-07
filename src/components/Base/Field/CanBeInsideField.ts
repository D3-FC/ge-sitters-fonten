import { Component, Inject, Vue } from 'vue-property-decorator'
import { BaseFieldContract } from './BaseFieldContract'

let inputId: number = 1

@Component
export class CanBeInsideField extends Vue {
  @Inject({
    from: 'BaseField',
    default: null
  }) field!: BaseFieldContract | null

  public get id () {
    return this.field ? this.field.id : `${this.constructor.name}-${inputId++}`
  }

  get fieldLabel (): string {
    return this.field?.label ?? ''
  }

  get hasError (): boolean {
    return this.field?.hasError ?? false
  }
}
