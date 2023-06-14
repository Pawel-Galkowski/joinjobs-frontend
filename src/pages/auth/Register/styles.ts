import type { SxProps, Theme } from '@mui/material'

export const formGroupStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(2.5, 0),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const forgotStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(0.5, 0)
})

export const actionHelpStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(0.5, 0, 0),
  color: theme.palette.secondary.main
})
