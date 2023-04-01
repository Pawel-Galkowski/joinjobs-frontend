import { useEffect } from 'react'
import Spinner from '../../../components/spinner/Spinner'
import { getUsers } from '../../../actions/profile'
import UsersItem from '../UsersItem/UsersItem'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type ProfileProps } from '../../../reducers/profile/types'
import { type AppDispatch } from '../../../store'

const Users: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { profiles, loading }: ProfileProps = useAppSelector((state) => state.profile)
  useEffect(() => {
    dispatch(getUsers())
  }, [getUsers])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h1 className='large text-primary'>Developers</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </p>
      <div className='profiles'>
        {profiles?.length ? (
          profiles.map((user: any) => <UsersItem key={user._id} profile={user} />)
        ) : (
          <h4>No Users found...</h4>
        )}
      </div>
    </>
  )
}

export default Users
