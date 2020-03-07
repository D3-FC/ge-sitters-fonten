export interface BaseFieldContract {
  label?: string
  id: string
  hasError: boolean

  hideLabel (): void
}
