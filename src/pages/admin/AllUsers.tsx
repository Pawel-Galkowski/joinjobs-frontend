import { deleteUserAccount } from '../../actions/profile'
import Spinner from '../../components/spinner/Spinner'
import { useCallback } from 'react'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface Usrs {
  confirmed: boolean
  _id: string
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
  const dispatch: AppDispatch = useAppDispatch()
  const submitOperation = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove this account?')) {
      dispatch(deleteUserAccount(_id))
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
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
        onClick={submitOperation}
        type='button'
      >
        Delete Account
      </button>
    </div>
  )
}

export default AdminUsers
