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

export const getValidColor =
  (color: ColorTypes): string => {
    const themeColor = (theme: Theme) => {
      const colorsTable: Record<string, string> = {
        primary: theme.palette.primary.main,
        primaryDark: theme.palette.primary.dark,
        secondary: theme.palette.secondary.main,
        secondaryLight: theme.palette.secondary.light,
        secondaryDark: theme.palette.secondary.dark,
        secondaryText: theme.palette.secondary.contrastText,
        error: theme.palette.error.main,
        success: theme.palette.success.main,
        divider: theme.palette.divider,
        white: theme.palette.common.white,
        black: theme.palette.common.black
      }

      return colorsTable[color] as unknown as string
    }
    return themeColor as unknown as string
  }
