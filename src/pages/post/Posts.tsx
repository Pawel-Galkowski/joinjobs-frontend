import { useEffect } from 'react'
import Spinner from '../../components/spinner/Spinner'
import PostItem from './PostItem'
import { getProfiles } from '../../actions/profile'
import { getPosts } from '../../actions/post'
import PostForm from './PostForm'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type PostProps } from '../../reducers/post/types'
import { type ProfileProps } from '../../reducers/profile/types'

const Posts: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { loading, profile }: ProfileProps = useAppSelector((state) => state.profile)
  const posts: PostProps[] = useAppSelector((state) => state.post.posts)

  useEffect(() => {
    dispatch(getProfiles())
    dispatch(getPosts())
  }, [getPosts, getProfiles])

  if (loading ?? profile ?? !posts?.length) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user' />
        {' Welcome to the community'}
      </p>
      <PostForm />
      <div className='posts'>
        {posts?.map((post: PostProps) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
