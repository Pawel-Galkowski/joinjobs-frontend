import type { SxProps, Theme } from '@mui/material'
import type { TextPlacementVariants, ButtonVariants, ColorTypes } from './types'

const getValidColor =
  (color: ColorTypes): string => {
    const themeColor = ({ palette }: Theme) => {
      const colorsTable: Record<string, string> = {
        primary: palette.primary.main,
        primaryDark: palette.primary.dark,
        secondary: palette.secondary.main,
        secondaryLight: palette.secondary.light,
        secondaryDark: palette.secondary.dark,
        secondaryText: palette.secondary.contrastText,
        error: palette.error.main,
        success: palette.success.main,
        divider: palette.divider,
        white: palette.common.white,
        black: palette.common.black,
        transparent: 'transparent'
      }

      return colorsTable[color] as unknown as string
    }
    return themeColor as unknown as string
  }

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
