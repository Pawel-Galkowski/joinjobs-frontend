import { type Theme, type SxProps, popoverClasses, menuClasses, svgIconClasses } from '@mui/material'

export const navbarMainStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  zIndex: 1,
  width: '100%',
  top: 0,
  borderBottom: `solid ${theme.spacing(0.125)} ${theme.palette.primary.main}`,
  maxHeight: theme.spacing(10),
  minHeight: theme.spacing(7.5),
  background: theme.palette.primary.dark,
  color: theme.palette.common.white,
  position: 'fixed',
  opacity: 0.9,
  boxSizing: 'border-box'
})

export const logoLinkStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
})

export const visibilityStyles = (isHidden: boolean): SxProps<Theme> => (theme) => ({
  display: isHidden ? 'none' : 'block',
  [`& .${svgIconClasses.root}`]: {
    fill: theme.palette.common.white
  }
})

export const burgerMenuStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  backgroundColor: theme.palette.primary.dark,
  '& a': {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
})

export const menuItemStyles: SxProps = {
  [`& .${popoverClasses.paper}`]: {
    padding: 0,
    borderRadius: 0
  },
  [`& .${menuClasses.list}`]: {
    padding: 0,
    borderRadius: 0
  }
}

export const menuStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  '& a': {
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
})
