import { Link, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { type AuthProps } from '../../reducers/auth/types'

export const Landing: React.FC = () => {
  const { isAuthenticated }: AuthProps = useAppSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='container-fluid'>
          <div className='landing-inner'>
            <h1 className='x-large'>Welcome to #JoinJobs</h1>
            <p className='lead'>
              {'Create a profile or portfolio, share posts and find '}
              <u>your dream job</u>
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
