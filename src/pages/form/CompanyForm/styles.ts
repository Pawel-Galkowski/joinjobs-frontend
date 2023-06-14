import type { Theme, SxProps } from '@mui/material'

export const topMarginStyles: SxProps<Theme> = (theme: Theme) => ({
  marginTop: theme.spacing(2)
})

export const paddingSectionStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2, 4),
  width: '100%',
  height: '100%',
  margin: theme.spacing(4, 0),
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.secondary.light}`
})
