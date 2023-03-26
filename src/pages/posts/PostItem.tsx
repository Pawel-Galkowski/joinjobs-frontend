import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../actions/post'
import { type PostSchema, type ProfileSchema } from '../../types'

interface PostItemData {
  auth?: any
  post: PostSchema
  showActions?: boolean
  profile: ProfileSchema[]
}

const PostItem: React.FC<PostItemData> = ({
  auth,
  post,
  showActions,
  profile
}) => {
  const singleProfile = profile.filter(({ user }: any) => user._id === post.user)
  const getUserImage: string =
    (profile && singleProfile[0]?.profileImg) || post.avatar

  return (
    <div className='post bg-white'>
      <div>
        <Link to={`/profile/${post.user._id}`}>
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
              onClick={() => addLike(post._id)}
            >
              <i className='fas fa-thumbs-up' />{' '}
              <span>{post.likes && post.likes.length > 0}</span>
            </button>
            <button
              type='button'
              className='btn btn-light'
              onClick={() => removeLike(post._id)}
            >
              <i className='fas fa-thumbs-down' />
            </button>
            <Link to={`/posts/${post._id}`} className='btn btn-primary'>
              {'Discussion '}
              {post.comments.length > 0 && (
                <span className='comment-count'> {post.comments.length}</span>
              )}
            </Link>
            {!auth.loading && post.user === auth.user._id && (
              <button
                onClick={() => deletePost(post._id)}
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

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost
})(PostItem)
