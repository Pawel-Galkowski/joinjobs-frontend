import { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../../components/spinner/Spinner'
import { getUsers } from '../../../actions/profile'
import UsersItem from '../UsersItem/UsersItem'
import type { Props } from '../types'

const Users: React.FC<Props> = ({ profile: { users, loading } }) => {
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className='large text-primary'>Developers</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </p>
      <div className='profiles'>
        {users.length > 0 ? (
          users.map((user: any) => <UsersItem key={user._id} profile={user} />)
        ) : (
          <h4>No Users found...</h4>
        )}
      </div>
    </>
  )
}

const mapStateToProps = ({ profile }: any) => ({
  profile
})

export default connect(mapStateToProps, { getUsers })(Users)
