import { type ColorTypes } from '../utils'

export type ButtonVariants = 'text' | 'contained' | 'outlined'

export interface Props {
  color?: ColorTypes
  variant?: ButtonVariants
  internalLink?: string
  children: string
  icon?: JSX.Element
  iconPlacement?: 'start' | 'end'
}
