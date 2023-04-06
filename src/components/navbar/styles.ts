import { colorsPalete } from '../../utils/colors'
import { type SxProps } from '@mui/material'

export const navbarMainStyles: SxProps = ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.7rem 1rem',
  zIndex: 1,
  width: '100%',
  top: 0,
  borderBottom: `solid 1px ${colorsPalete.primary}`,
  maxHeight: '80px',
  minHeight: '60px',
  background: colorsPalete.dark,
  color: colorsPalete.white,
  position: 'fixed',
  opacity: 0.9
})

export const logoLinkStyles: SxProps = ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: colorsPalete.white,
  padding: '0.45rem',
  margin: '0 0.25rem',
  '&:hover': {
    color: colorsPalete.primary
  }
})
