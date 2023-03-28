import { useEffect } from 'react'
import Spinner from '../../components/spinner/Spinner'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'

const Profiles: React.FC = () => {
  const { profiles, loading } = useAppSelector((state) => state.profile.profile)
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProfiles())
  }, [getProfiles])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Developers</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </p>
      <div className='profiles'>
        {profiles.length > 0 ? (
          profiles.map((profile: any) => (
            <ProfileItem key={profile._id} {...profile} />
          ))
        ) : (
          <h4>No Profiles found...</h4>
        )}
      </div>
    </div>
  )
}

export default Profiles
