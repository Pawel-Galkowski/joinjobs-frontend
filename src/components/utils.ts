import { type Theme } from '@mui/material'

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

export const getValidColor =
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
