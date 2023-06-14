import type { SxProps, Theme } from '@mui/material'

export const formGroupStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(2.5, 0),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const leadStyles: SxProps<Theme> = (theme: Theme) => ({
  fontSize: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})
