import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import PostItem from '../posts/PostItem'
import CommentItem from './CommentItem'
import CommentForm from './CommentForm'
import { getPost } from '../../actions/post'
import { getProfiles } from '../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type CommentProps } from '../../reducers/post/types'

const Post: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const profile = useAppSelector((state) => state.profile.profile)
  const post = useAppSelector((state) => state.post.post)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPost(id!))
    dispatch(getProfiles())
  }, [getPost, getProfiles])

  if (post.loading || !post.post || profile.loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <Link to='/posts' className='btn btn-light'>
        Back to Posts
      </Link>
      <div className='mainPost'>
        <PostItem
          post={post.post}
          showActions={false}
        />
      </div>
      <hr />
      <CommentForm postId={post.post._id} />
      <div className='comments'>
        {post.comments.map((comment: CommentProps) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={post.post._id}
          />
        ))}
      </div>
    </div>
  )
}

export default Post
