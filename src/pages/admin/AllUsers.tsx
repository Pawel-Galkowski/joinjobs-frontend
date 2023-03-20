import { connect } from 'react-redux';
import { deleteUserAccount } from '../../actions/profile';
import Spinner from '../../components/spinner/Spinner';

function AdminUsers ({
  usrs: { confirmed, _id, name, email, date, role, loading }
}: {
  usrs: any
}) {
  return loading
? (
    <Spinner />
  )
: (
    <div className="bg-white padding2 margin-2ud">
      <h3>
        <strong>{name} -</strong>
        <span className={role === 'admin' ? 'dangerRole' : ''}>{role}</span>
      </h3>
      <div className="margin-2ud">
        <p>
          Email: <b>{email}</b>
        </p>
        <p>
          Creation date: <b>{date.substring(0, 10)}</b>
        </p>
        <p>
          Confirmation:{' '}
          <b>
            {confirmed
? (
              confirmed.toString()
            )
: (
              <span className="dangerRole">{confirmed.toString()}</span>
            )}
          </b>
        </p>
        <p>
          Creation time: <b>{date.substring(11, 16)}</b>
        </p>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => deleteUserAccount(_id)}
        type="button"
      >
        Delete Account
      </button>
    </div>
  )
}

export default connect(null, { deleteUserAccount })(AdminUsers)
