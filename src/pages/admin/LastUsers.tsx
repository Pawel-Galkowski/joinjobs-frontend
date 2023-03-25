import { connect } from 'react-redux'
import { deleteUserAccount as deleteUserAccountAction } from '../../actions/profile'
import Spinner from '../../components/spinner/Spinner'
import { useCallback } from 'react'

function AdminUsers ({
  usrs: { confirmed, _id, name, email, date, role, loading },
  deleteUserAccount
}: {
  usrs: any
  deleteUserAccount?: any
}) {
  const submitOperation = useCallback(async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove this account?')) {
      await deleteUserAccount(_id)
    }
  }, [])

  return confirmed && loading ? (
    <Spinner />
  ) : (
    <div className='bg-white padding2 margin-2ud'>
      <h3>
        <strong>
          {name}
          {' -'}
        </strong>
        <span className={role === 'admin' ? 'dangerRole' : ''}>{role}</span>
      </h3>
      <div className='margin-2ud'>
        <p>
          {'Email: '}
          <b>{email}</b>
        </p>
        <p>
          {'Creation date: '}
          <b>{date.substring(0, 10)}</b>
        </p>
        <p>
          {'Creation time: '}
          <b>{date.substring(11, 16)}</b>
        </p>
      </div>
      <button
        className='btn btn-danger'
        onClick={() => submitOperation}
        type='button'
      >
        Delete Account
      </button>
    </div>
  )
}

export default connect(null, { deleteUserAccountAction })(AdminUsers)
