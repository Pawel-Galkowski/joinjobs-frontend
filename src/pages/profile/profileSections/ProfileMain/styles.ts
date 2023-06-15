import type { SxProps, Theme } from '@mui/material'

export const paddingSectionStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(2, 4),
  width: '100%',
  height: '100%',
  margin: theme.spacing(4, 0),
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.secondary.light}`
})

export const profilePageStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(2, 0)
})

export const flexRowStyles: SxProps = ({
  display: 'flex',
  flexDirection: 'row'
})

export const knowledgeSectionsStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  flex: 1,
  width: '40%'
})
