import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Spinner from '../../components/spinner/Spinner'
import { deletePost } from '../../actions/post'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { useCallback } from 'react'
import { type AuthProps } from '../../reducers/auth/types'
import { type PostProps } from '../../reducers/post/types'

interface Props {
  post: PostProps
  showActions?: boolean
}

const PostItem: React.FC<Props> = ({ post, showActions = true }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const auth: AuthProps = useAppSelector((state) => state.auth)

  const handleDeletePost = useCallback(() => {
    dispatch(deletePost(post._id))
  }, [])

  if (post.loading) {
    return <Spinner />
  }
  return (
    <div className='post-users bg-white p-1 my-4'>
      <div>
        <Link to={`/profile/${post.user}`}>
          <img className='round-img' src={post.avatar} alt='avatar' />
          <h4>{post.name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{post.text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>
        </p>
        {showActions && (
          <div>
            <Link to={`/posts/${post._id}`} className='btn btn-primary'>
              Discussion{' '}
              {post.comments.length && (
                <span className='comment-count'> {post.comments.length}</span>
              )}
            </Link>
            {!auth.loading && (
              <button
                onClick={handleDeletePost}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostItem
