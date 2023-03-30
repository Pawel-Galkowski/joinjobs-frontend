import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { addLike, removeLike, deletePost } from '../../actions/post'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { useCallback } from 'react'
import { type ProfileType } from '../../reducers/profile/types'
import { type PostProps } from '../../reducers/post/types'
import { type AuthProps } from '../../reducers/auth/types'

interface PostItemData {
  post: PostProps
  showActions?: boolean
}

const PostItem: React.FC<PostItemData> = ({
  post,
  showActions
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const auth: AuthProps = useAppSelector((state) => state.auth)
  const profiles: ProfileType[] = useAppSelector((state) => state.profile.profiles)
  const singleProfile: ProfileType = profiles?.filter((profile: ProfileType) => profile.user._id === post.user)[0]
  const getUserImage: string = singleProfile?.profileImg || post.avatar

  const addlikeAction = useCallback(() => {
    dispatch(addLike(post._id))
  }, [])

  const removeLikeAction = useCallback(() => {
    dispatch(removeLike(post._id))
  }, [])

  const handleDelatePost = useCallback(() => {
    dispatch(deletePost(post._id))
  }, [])

  return (
    <div className='post bg-white'>
      <div>
        <Link to={`/profile/${post.user}`}>
          <img className='round-img' src={getUserImage} alt='avatar' />
          <h4>{post.name}</h4>
        </Link>
      </div>
      <div>
        <p>{post.text}</p>
        <p className='post-date'>
          {'Posted on '}
          <Moment format='YYYY/MM/DD'>{post.date}</Moment>
        </p>
        {showActions && (
          <>
            <button
              type='button'
              className='btn btn-light'
              onClick={addlikeAction}
            >
              <i className='fas fa-thumbs-up' />{' '}
              <span>{post.likes?.length}</span>
            </button>
            <button
              type='button'
              className='btn btn-light'
              onClick={removeLikeAction}
            >
              <i className='fas fa-thumbs-down' />
            </button>
            <Link to={`/posts/${post._id}`} className='btn btn-primary'>
              {'Discussion '}
              {post.comments.length && (
                <span className='comment-count'> {post.comments.length}</span>
              )}
            </Link>
            {!auth.loading && post.user === auth.user._id && (
              <button
                onClick={handleDelatePost}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default PostItem
