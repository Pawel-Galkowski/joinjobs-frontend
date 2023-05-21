import type { SxProps } from '@mui/material'
import { type ColorTypes, getValidColor } from '../utils'
import type { TextPlacementVariants, ButtonVariants } from './types'

export const buttonStyles = ({ color, variant, textPlacement }: { color?: ColorTypes, variant?: ButtonVariants, textPlacement?: TextPlacementVariants }): SxProps => {
  const backgroundDefaultColorByVariant: Record<ButtonVariants, ColorTypes> = {
    text: 'transparent',
    contained: 'primary',
    outlined: 'secondary'
  }

  const textPlacementMap: Record<TextPlacementVariants, string> = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center'
  }

  return ({
    background: getValidColor(color ?? backgroundDefaultColorByVariant[variant ?? 'contained']),
    display: 'flex',
    alignItems: 'center',
    justifyContent: textPlacementMap[textPlacement ?? 'start']
  })
}
