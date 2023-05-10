import { useCallback, useEffect, useState } from 'react'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from '../../actions/profile'
import { Spinner } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type ProfileType } from '../../reducers/profile/types'
import {
  burgerMenuStyles,
  logoLinkStyles,
  menuItemStyles,
  menuStyles,
  navbarMainStyles,
  visibilityStyles
} from './styles'
import {
  Box,
  Link,
  Menu,
  Typography,
  IconButton,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { PersonIcon, LogoutIcon, MenuIcon } from '../../utils/icons'

const Navbar: React.FC = () => {
  const theme = useTheme()
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user }: AuthProps = useAppSelector(
    ({ auth }) => auth
  )
  const profile: ProfileType = useAppSelector(({ profile }) => profile.profile)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const isBigScreen: boolean = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const ResolveRole: React.FC = (): JSX.Element =>
    isAuthenticated ? (
      <Box sx={isSmallScreen ? burgerMenuStyles : menuStyles}>
        {user?.role === 'admin' && (
          <MenuItem>
            <Link href='/admin'>Admin panel</Link>
          </MenuItem>
        )}
        {profile && (
          <MenuItem>
            <Link href={`/profile/${user?._id}`}>
              <PersonIcon />
              Profile
            </Link>
          </MenuItem>
        )}
        <MenuItem onClick={logout}>
          <LogoutIcon />
          Logout
        </MenuItem>
      </Box>
    ) : (
      <Box sx={isSmallScreen ? burgerMenuStyles : menuStyles}>
        <MenuItem>
          <Link href='/'>
            <Typography variant='subtitle1'>Dashboard</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/login'>
            <Typography variant='subtitle1'>Login</Typography>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/register'>
            <Typography variant='subtitle1'>Register</Typography>
          </Link>
        </MenuItem>
      </Box>
    )

  return (
    <Box sx={navbarMainStyles}>
      <Link href='/' sx={logoLinkStyles}>
        <Typography variant='h3'>#JoinJobs</Typography>
      </Link>
      {loading ? (
        <Spinner small />
      ) : (
        <>
          <Box sx={visibilityStyles(isSmallScreen)}>
            <ResolveRole />
          </Box>
          <Box sx={visibilityStyles(isBigScreen)}>
            <IconButton
              aria-label='more'
              id='long-button'
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{ 'aria-labelledby': 'long-button' }}
              anchorEl={anchorEl}
              sx={menuItemStyles}
              open={open}
              onClose={handleClose}>
              <ResolveRole />
            </Menu>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Navbar
