export type ButtonVariants = 'text' | 'contained' | 'outlined'
export type TextPlacementVariants = 'start' | 'end' | 'center'
export type ColorTypes =
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'secondaryLight'
  | 'secondaryDark'
  | 'secondaryText'
  | 'error'
  | 'success'
  | 'divider'
  | 'white'
  | 'black'
  | 'transparent'

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
