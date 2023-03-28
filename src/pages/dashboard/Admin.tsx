import { useEffect } from 'react'
import Spinner from '../../components/spinner/Spinner'
import { getProfiles, getUsers, getAllusers } from '../../actions/profile'
import { getPosts } from '../../actions/post'
import AdminPosts from '../admin/LastPosts'
import AdminProfiles from '../admin/LastProfiles'
import AddUsers from '../admin/AddUsers'
import AdminUsers from '../admin/LastUsers'
import AllUsers from '../admin/AllUsers'
import { useMultipleDispatch } from '../../utils/useMultipleDispatch'
import { useAppSelector } from '../../hooks'

const propComparator = (propName: any) => (a: any, b: any) => {
  if (a[propName] === b[propName]) {
    return 0
  }
  if (a[propName] < b[propName]) {
    return -1
  }
  return 1
}

const Admin: React.FC = () => {
  const { profile } = useAppSelector((state) => state.profile)
  const { posts } = useAppSelector((state) => state.post)
  useEffect(() => {
    useMultipleDispatch([
      getPosts(),
      getProfiles(),
      getUsers(),
      getAllusers()
    ]
    )
  }, [getPosts, getProfiles, getUsers, getAllusers])

  return profile.loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <section className='flex-column'>
        <article className='row-100'>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>Last added profiles</h2>
              {profile.profiles === undefined ? (
                <Spinner />
              ) : (
                profile.profiles
                  .map((item: any) => (
                    <AdminProfiles key={item._id} profile={item} />
                  ))
                  .sort(propComparator('date'))
                  .slice(0, 5)
              )}
            </div>
          </div>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>Last added posts</h2>
              {posts === undefined ? (
                <Spinner />
              ) : (
                posts
                  .map((post: any) => <AdminPosts key={post._id} post={post} />)
                  .sort(propComparator('date'))
                  .slice(0, 5)
              )}
            </div>
          </div>
        </article>
        <article className='row-100'>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>Last added users without profile</h2>
              {profile.users2 === undefined ? (
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
            </div>
          </div>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>Add user</h2>
              <AddUsers />
            </div>
          </div>
        </article>
        <article className='row-100'>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>All Users</h2>
              {profile.allUsers === undefined ? (
                <Spinner />
              ) : (
                <>
                  {profile.allUsers
                    .map((usrs: any) => <AllUsers key={usrs._id} usrs={usrs} />)
                    .sort(propComparator('date'))
                    .slice(0, 5)}
                </>
              )}
            </div>
          </div>
          <div className='admin-box'>
            <div className='inside-box'>
              <h2 className='box-header'>Not added yet</h2>
              <Spinner />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Admin
