import { useEffect } from 'react'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from '../../actions/profile'
import { Spinner } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type ProfileType } from '../../reducers/profile/types'
import { logoLinkStyles, navbarMainStyles } from './styles'
import { Box, Link, Typography } from '@mui/material'

const Navbar: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user }: AuthProps = useAppSelector(
    (state) => state.auth
  )
  const profile: ProfileType = useAppSelector((state) => state.profile.profile)

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  if (loading) {
    return <Spinner />
  }

  const showProfile = (
    <li>
      <Link href={`/profile/${user?._id}`}>
        <i className='fas fa-user' />
        {'Profile '}
      </Link>
    </li>
  )

  const ResolveRole = (): JSX.Element => {
    if (user?.role === 'admin' && isAuthenticated) {
      return (
        <ul>
          <li>
            <Link href='/admin'>Admin panel </Link>
          </li>
          {profile && showProfile}
          <li>
            <a onClick={logout} href='#!'>
              <i className='fas fa-sign-out-alt' />
              <span> Logout</span>
            </a>
          </li>
        </ul>
      )
    }
    if (isAuthenticated) {
      return (
        <ul>
          {profile && showProfile}
          <li>
            <a onClick={logout} href='#!'>
              <i className='fas fa-sign-out-alt' />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      )
    }
    return (
      <ul>
        <li>
          <Link href='/'> Dashboard </Link>
        </li>
        <li>
          <Link href='/login'> Login </Link>
        </li>
        <li>
          <Link href='/register'> Register </Link>
        </li>
      </ul>
    )
  }

  return (
    <Box sx={navbarMainStyles}>
      <Link href='/' sx={logoLinkStyles}>
        <Typography variant='h3'>
          <i className='fas fa-hashtag' />
          JoinJobs
        </Typography>
      </Link>
      <Box className='mainNav'>
        <ResolveRole />
      </Box>
      <Box className='menu-wrap'>
        <input type='checkbox' className='toggler' />
        <Box className='hamburger'>
          <div />
        </Box>
        <Box className='menu'>
          <ResolveRole />
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
