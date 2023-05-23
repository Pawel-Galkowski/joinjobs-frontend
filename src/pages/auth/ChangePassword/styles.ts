import type { SxProps, Theme } from '@mui/material'

export const formGroupStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(2.5, 0),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})
