import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from '../../actions/profile'
import { type Props } from './types'
import { Spinner } from '..'

const Navbar: React.FC<Props> = ({
  auth: { isAuthenticated, loading, user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])

  const showProfile = (
    <li>
      <Link to={`/profile/${user._id}`}>
        <i className='fas fa-user' />
        {'Profile '}
      </Link>
    </li>
  )

  const resolveRole = (): JSX.Element => {
    if (user.role === 'admin' && isAuthenticated) {
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

  return loading ? (
    <Spinner />
  ) : (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/' className='logoLink'>
          <i className='fas fa-hashtag' />
          JoinJobs
        </Link>
      </h1>
      <div className='mainNav'>{resolveRole()}</div>
      <div className='menu-wrap'>
        <input type='checkbox' className='toggler' />
        <div className='hamburger'>
          <div />
        </div>
        <div className='menu'>
          <div>
            <div>{resolveRole()}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth, profile }: any) => ({
  auth,
  profile
})

export default connect(mapStateToProps, { getCurrentProfile, logout })(Navbar)
