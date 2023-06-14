import type { SxProps, Theme } from '@mui/material'

export const leadStyles: SxProps<Theme> = (theme: Theme) => ({
  fontSize: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const paddingSectionStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2, 4),
  width: '100%',
  height: '100%',
  margin: theme.spacing(4, 0),
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.secondary.light}`
})

export const tableCenterStyles: SxProps = {
  overflowX: 'auto',
  margin: '0 auto',
  textAlign: 'center'
}

export const removeUserStyles: SxProps<Theme> = (theme: Theme) => ({
  margin: theme.spacing(2, 0, 0),
  width: '100%'
})
