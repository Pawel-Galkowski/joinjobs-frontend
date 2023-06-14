import type { SxProps, Theme } from '@mui/material'

export const leadStyles: SxProps<Theme> = (theme: Theme) => ({
  fontSize: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const profileStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 4fr 2fr',
  alignItems: 'center',
  gridGap: theme.spacing(4),
  padding: theme.spacing(2),
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
  margin: 'auto',
  maxWidth: theme.spacing(125)
})

export const profilesStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 4fr 2fr',
  alignItems: 'center',
  gridGap: theme.spacing(4),
  padding: theme.spacing(2),
  lineHeight: 1.8,
  marginBottom: theme.spacing(2),
  margin: 'auto',
  maxWidth: theme.spacing(125)
})
