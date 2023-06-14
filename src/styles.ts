import { type SxProps } from '@mui/material'

export const appStyles: SxProps = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden'
}

export const mainStyles: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'hidden',
  height: '100%',
  width: '100%',

  '&::-webkit-scrollbar, &::-webkit-scrollbar-track': {
    display: 'none'
  }
}
