import { useEffect, useState } from 'react'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from '../../actions/profile'
import { Spinner } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type ProfileType } from '../../reducers/profile/types'
import { logoLinkStyles, navbarMainStyles, visibilityStyles } from './styles'
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
import { PersonIcon, LogoutIcon, TagIcon, MenuIcon } from '../../utils/icons'

const Navbar: React.FC = () => {
  const theme = useTheme()
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user }: AuthProps = useAppSelector(
    (state) => state.auth
  )
  const profile: ProfileType = useAppSelector((state) => state.profile.profile)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const isBigScreen: boolean = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const ResolveRole = (): JSX.Element =>
    isAuthenticated ? (
      <>
        {user?.role === 'admin' && (
          <MenuItem>
            <Link href='/admin'>Admin panel </Link>
          </MenuItem>
        )}
        {profile && (
          <MenuItem>
            <Link href={`/profile/${user?._id}`}>
              <PersonIcon />
              {'Profile '}
            </Link>
          </MenuItem>
        )}
        <MenuItem onClick={logout}>
          <LogoutIcon />
          <span> Logout</span>
        </MenuItem>
      </>
    ) : (
      <>
        <MenuItem>
          <Link href='/'> Dashboard </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/login'> Login </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/register'> Register </Link>
        </MenuItem>
      </>
    )

  return (
    <Box sx={navbarMainStyles}>
      <Link href='/' sx={logoLinkStyles}>
        <Typography variant='h3'>
          <TagIcon />
          JoinJobs
        </Typography>
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
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{ 'aria-labelledby': 'long-button' }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <ResolveRole />
            </Menu>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Navbar
