import { connect } from 'react-redux'
import { deleteUserAccount } from '../../actions/profile'
import Spinner from '../../components/spinner/Spinner'
import { useCallback } from 'react'

interface Usrs {
  confirmed: boolean
  _id: number
  name: string
  email: string
  date: string
  role: 'admin' | 'user'
  loading?: boolean
}

interface Props {
  usrs: Usrs
}

const AdminUsers: React.FC<Props> = ({
  usrs: { confirmed, _id, name, email, date, role, loading }
}) => {
  const submitOperation = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove this account?')) {
      deleteUserAccount(_id)
    }
  }, [])

  return loading ? (
    <Spinner />
  ) : (
    <div className='bg-white padding2 margin-2ud'>
      <h3>
        <strong>{name} -</strong>
        <span className={role === 'admin' ? 'dangerRole' : ''}>{role}</span>
      </h3>
      <div className='margin-2ud'>
        <p>
          Email: <b>{email}</b>
        </p>
        <p>
          Creation date: <b>{date.substring(0, 10)}</b>
        </p>
        <p>
          Confirmation:{' '}
          <b>
            {confirmed ? (
              confirmed.toString()
            ) : (
              <span className='dangerRole'>{confirmed.toString()}</span>
            )}
          </b>
        </p>
        <p>
          Creation time: <b>{date.substring(11, 16)}</b>
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

export default connect(null, { deleteUserAccount })(AdminUsers)
