import { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Education from './Education'
import Experience from './Experience'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface Auth {
  user: any
}

interface Profile {
  profile: any
  loading?: boolean
}

interface Props {
  auth: Auth
  profile: Profile
}

const Dashboard: React.FC<Props> = ({
  auth: { user },
  profile: { profile, loading }
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(
      getCurrentProfile()
    )
  }, [])

  const submitOperation = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove your account?')) {
      deleteAccount()
    }
  }, [])

  return loading ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user?.name}
      </p>
      {profile ? (
        <>
          {typeof profile.experience !== 'object' ||
          typeof profile.education !== 'object' ? (
            <Spinner />
              ) : (
            <div className='table-center'>
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
            </div>
              )}
          <div className='removeUser-section'>
            <button
              className='btn btn-danger'
              type='submit'
              onClick={submitOperation}
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

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount
})(Dashboard)
