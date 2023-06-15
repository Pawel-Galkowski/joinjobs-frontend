import type { Theme, SxProps } from '@mui/material'

export const appStyles: SxProps = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden'
}

export const mainStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'hidden',
  height: '100%',
  margin: theme.spacing(10, 0, 0),
  width: '100%',

  '&::-webkit-scrollbar, &::-webkit-scrollbar-track': {
    display: 'none'
  }
})
