import type { SxProps, Theme } from '@mui/material'

export const githubProfileStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '2% 5%'
})

export const repoStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '2%',
  padding: '2%'
})
