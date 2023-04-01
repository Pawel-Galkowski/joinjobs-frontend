import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from '../../actions/profile'
import { Spinner } from '..'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type ProfileType } from '../../reducers/profile/types'

const Navbar: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user }: AuthProps = useAppSelector((state) => state.auth)
  const profile: ProfileType = useAppSelector((state) => state.profile.profile)

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  if (loading) {
    return <Spinner />
  }

  const showProfile = (
    <li>
      <Link to={`/profile/${user?._id}`}>
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
            <Link to='/admin'>Admin panel </Link>
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
          <Link to='/'> Dashboard </Link>
        </li>
        <li>
          <Link to='/login'> Login </Link>
        </li>
        <li>
          <Link to='/register'> Register </Link>
        </li>
      </ul>
    )
  }

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/' className='logoLink'>
          <i className='fas fa-hashtag' />
          JoinJobs
        </Link>
      </h1>
      <div className='mainNav'>
        <ResolveRole />
      </div>
      <div className='menu-wrap'>
        <input type='checkbox' className='toggler' />
        <div className='hamburger'>
          <div />
        </div>
        <div className='menu'>
          <div>
            <div>
              <ResolveRole />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
