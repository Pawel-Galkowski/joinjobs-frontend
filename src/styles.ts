import { type SxProps } from '@mui/material'

export const appStyles: SxProps = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  height: '100vh',
  width: '100vw'
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

  // 'div:nth-of-type(2)': {
  //   width: '100%',
  //   '&.profile-skills': {
  //     width: '30%'
  //   }
  // }
}
