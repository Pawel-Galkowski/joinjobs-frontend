import { useEffect } from 'react'
import Spinner from '../../components/spinner/Spinner'
import { getUsers } from '../../actions/profile'
import { UsersItem } from './UsersItem'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { ProfileType, ProfileProps } from '../../reducers/profile/types'
import { type AppDispatch } from '../../store'
import { Typography } from '@mui/material'
import { leadStyles } from './styles'

export const Users: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { profiles, loading }: ProfileProps = useAppSelector(
    ({ profile }) => profile
  )
  useEffect(() => {
    dispatch(getUsers())
  }, [getUsers])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Typography variant='h2'>Developers</Typography>
      <Typography sx={leadStyles}>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </Typography>
      {profiles ? (
        profiles.map((user: ProfileType) => (
          <UsersItem key={user._id} profile={user} />
        ))
      ) : (
        <Typography variant='body1'>No Users found...</Typography>
      )}
    </>
  )
}
