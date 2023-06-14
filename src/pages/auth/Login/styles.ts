import type { Theme, SxProps } from '@mui/material'

export const loginFormStyles: SxProps<Theme> = (theme: Theme) => ({
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    height: 'auto'
  }
})

export const actionHelpStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(0.5, 0, 0),
  color: theme.palette.secondary.main
})

export const forgotStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(0.5, 0)
})
