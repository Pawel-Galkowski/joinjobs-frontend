import { type ColorTypes } from '../utils'

export type ButtonVariants = 'text' | 'contained' | 'outlined'
export type TextPlacementVariants = 'start' | 'end' | 'center'

export interface Props {
  color?: ColorTypes
  variant?: ButtonVariants
  textPlacement?: TextPlacementVariants
  link?: string
  children: string | JSX.Element
  icon?: JSX.Element
  iconPlacement?: 'start' | 'end'
  onClick?: () => void
}
