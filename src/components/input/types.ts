export interface Props {
  value: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  isErrored?: boolean
  minLength?: number
  maxLength?: number
}
