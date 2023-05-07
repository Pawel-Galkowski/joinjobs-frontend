import type { Theme, SxProps } from '@mui/material'

export const navbarMainStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.7rem 1rem',
  zIndex: 1,
  width: '100%',
  top: 0,
  borderBottom: `solid 1px ${theme.palette.primary.main}`,
  maxHeight: '80px',
  minHeight: '60px',
  background: theme.palette.primary.dark,
  color: theme.palette.common.white,
  position: 'fixed',
  opacity: 0.9
})

export const logoLinkStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: theme.palette.common.white,
  padding: '0.45rem',
  margin: '0 0.25rem',
  '&:hover': {
    color: theme.palette.primary.main
  }
})

export const visibilityStyles = (isHidden: boolean): SxProps<Theme> => (theme) => ({
  display: isHidden ? 'none' : 'block'
})

export const burgerMenuStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex'
})

export const menuStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex'
})
