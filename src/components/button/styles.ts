import type { SxProps } from '@mui/material'
import { type ColorTypes, getValidColor } from '../utils'
import { type ButtonVariants } from './types'

export const buttonStyles = ({ color, variant }: { color?: ColorTypes, variant?: ButtonVariants }): SxProps => {
  const backgroundDefaultColorByVariant: Record<ButtonVariants, ColorTypes> = {
    text: 'transparent',
    contained: 'primary',
    outlined: 'secondary'
  }

  return ({
    background: getValidColor(color ?? backgroundDefaultColorByVariant[variant ?? 'contained'])
  })
}
