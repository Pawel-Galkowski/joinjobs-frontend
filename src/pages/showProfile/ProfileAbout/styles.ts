import { type SxProps, type Theme } from '@mui/material'

export const profileAboutStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(5, 10),
  background: theme.palette.secondary.main
})
