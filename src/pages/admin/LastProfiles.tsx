import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'
import { deleteUserAccount } from '../../actions/profile'
import { useCallback } from 'react'

interface User {
  _id: number
  name: string
  avatar: string
  loading?: boolean
}

interface Profile {
  user: User
  status: string
  company: string
}

interface Props {
  profile: Profile
}

const AdminProfiles: React.FC<Props> = ({
  profile: {
    user: { _id, name, avatar, loading },
    status,
    company
  }
}) => {
  const submitOperation = useCallback(async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove this account?')) {
      await deleteUserAccount(_id)
    }
  }, [])
  return loading ? (
    <Spinner />
  ) : (
    <div className='profile-admin bg-white'>
      <img src={avatar} alt='avatar' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status}{' '}
          {company && (
            <span>
              {' '}
              at
              {company}
            </span>
          )}
        </p>
        <Link
          to={`/profile/${_id}`}
          className='btn btn-primary'
          target='_blank'
        >
          View Profile
        </Link>
        <button
          className='btn btn-danger'
          onClick={() => submitOperation}
          type='button'
        >
          Delete User
        </button>
      </div>
    </div>
  )
}

export default connect(null, { deleteUserAccount })(AdminProfiles)
