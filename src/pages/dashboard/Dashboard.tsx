import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Education from './Education'
import Experience from './Experience'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const { profile, loading } = useAppSelector((state) => state.profile)
  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const submitOperation = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove your account?')) {
      dispatch(deleteAccount())
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user?.name}
      </p>
      {profile ? (
        <>
          <div className='table-center'>
            <Experience />
            <Education />
          </div>
          <div className='removeUser-section'>
            <button
              className='btn btn-danger'
              type='submit'
              onClick={() => submitOperation}
            >
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some informations</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create profile
          </Link>
        </>
      )}
    </div>
  )
}

export default Dashboard
