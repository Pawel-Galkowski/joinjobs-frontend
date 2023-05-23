import { useEffect } from 'react'
import Spinner from '../../../components/spinner/Spinner'
import { getProfiles, getUsers, getAllusers } from '../../../actions/profile'
import { getPosts } from '../../../actions/post'
import AdminPosts from '../../admin/LastPosts'
import AdminProfiles from '../../admin/LastProfiles'
import AddUsers from '../../admin/AddUsers'
import AdminUsers from '../../admin/LastUsers'
import AllUsers from '../../admin/AllUsers'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type PostProps } from '../../../reducers/post/types'
import { type AppDispatch } from '../../../store'
import { Box, Typography } from '@mui/material'
import { adminBoxStyles, flexColumnStyles, insideBoxStyles, paddingSectionStyles, row100Styles } from './styles'

const propComparator = (propName: string) => (a: any, b: any) => {
  if (a[propName] === b[propName]) {
    return 0
  }
  if (a[propName] < b[propName]) {
    return -1
  }
  return 1
}

export const Admin: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { profile } = useAppSelector(({ profile }) => profile)
  const { posts } = useAppSelector(({ post }) => post)
  useEffect(() => {
    dispatch(getPosts())
    dispatch(getProfiles())
    dispatch(getUsers())
    dispatch(getAllusers())
  }, [getPosts, getProfiles, getUsers, getAllusers])

  if (profile?.loading) {
    return <Spinner />
  }

  return (
    <Box sx={paddingSectionStyles}>
      <Box sx={flexColumnStyles}>
        <Box sx={row100Styles}>
          <Box sx={adminBoxStyles}>
            <Box sx={insideBoxStyles}>
              <Typography variant='h2'>
                Last added profiles
              </Typography>
              {!profile.profiles ? (
                <Spinner />
              ) : (
                profile.profiles
                  .map((item: any) => (
                    <AdminProfiles key={item._id} profile={item} />
                  ))
                  .sort(propComparator('date'))
                  .slice(0, 5)
              )}
            </Box>
          </Box>
          <Box sx={adminBoxStyles}>
            <Box sx={insideBoxStyles}>
              <Typography variant='h2'>
                Last added posts
              </Typography>
              {!posts ? (
                <Spinner />
              ) : (
                posts
                  .map((post: PostProps) => (
                    <AdminPosts key={post._id} post={post} />
                  ))
                  .sort(propComparator('date'))
                  .slice(0, 5)
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={row100Styles}>
          <Box sx={adminBoxStyles}>
            <Box sx={insideBoxStyles}>
              <Typography variant='h2'>
                Last added users without profile
              </Typography>
              {!profile.users2 ? (
                <Spinner />
              ) : (
                <>
                  {profile.users2
                    .map((usrs: any) => (
                      <AdminUsers key={usrs._id} usrs={usrs} />
                    ))
                    .sort(propComparator('date'))
                    .slice(0, 5)}
                </>
              )}
            </Box>
          </Box>
          <Box sx={adminBoxStyles}>
            <Box sx={insideBoxStyles}>
              <Typography variant='h2'>
                Add user
              </Typography>
              <AddUsers />
            </Box>
          </Box>
        </Box>
        <Box sx={row100Styles}>
          <Box sx={adminBoxStyles}>
            <Box sx={insideBoxStyles}>
              <Typography variant='h2'>
                All Users
              </Typography>
              {!profile.allUsers ? (
                <Spinner />
              ) : (
                <>
                  {profile.allUsers
                    .map((usrs: any) => <AllUsers key={usrs._id} usrs={usrs} />)
                    .sort(propComparator('date'))
                    .slice(0, 5)}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
