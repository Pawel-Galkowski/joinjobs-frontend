import { type Theme, type SxProps, popoverClasses, menuClasses, svgIconClasses } from '@mui/material'
import { getValidColor } from '../utils'

export const navbarMainStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  zIndex: 1,
  width: '100%',
  top: 0,
  borderBottom: `solid ${theme.spacing(0.125)} ${getValidColor('primary')}`,
  maxHeight: theme.spacing(10),
  minHeight: theme.spacing(7.5),
  background: getValidColor('primaryDark'),
  color: getValidColor('white'),
  position: 'fixed',
  opacity: 0.9,
  boxSizing: 'border-box'
})

export const logoLinkStyles: SxProps<Theme> = ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: getValidColor('white'),
  borderColor: getValidColor('white'),
  textDecoration: 'none',
  '&:hover': {
    color: getValidColor('primary'),
    borderColor: getValidColor('primary')
  }
})

export const visibilityStyles = (isHidden: boolean): SxProps<Theme> => (theme) => ({
  display: isHidden ? 'none' : 'block',
  [`& .${svgIconClasses.root}`]: {
    fill: getValidColor('white')
  }
})

export const burgerMenuStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  backgroundColor: getValidColor('primaryDark'),
  '& a': {
    textDecoration: 'none',
    color: getValidColor('white'),
    '&:hover': {
      color: getValidColor('primary')
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
    color: getValidColor('white'),
    '&:hover': {
      color: getValidColor('primary')
    }
  }
})
