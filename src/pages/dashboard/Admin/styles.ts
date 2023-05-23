import type { SxProps, Theme } from '@mui/material'

export const paddingSectionStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2, 4),
  width: '100%',
  height: '100%',
  margin: theme.spacing(4, 0),
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.secondary.light}`
})

export const flexColumnStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column'
}

export const row100Styles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  flex: 1,
  width: '100%',
  margin: theme.spacing(6, 0),
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 0),
    flexDirection: 'column'
  }
})

export const adminBoxStyles: SxProps<Theme> = (theme: Theme) => ({
  overflowY: 'auto',
  height: theme.spacing(60),
  padding: '2%',
  width: '45%',
  flexGrow: 1,
  flex: 1,
  border: `${theme.spacing(0.25)} solid ${theme.palette.common.black}`
})

export const insideBoxStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  verticalAlign: 'middle'
})
