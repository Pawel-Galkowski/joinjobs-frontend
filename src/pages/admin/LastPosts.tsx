import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'
import { deletePost } from '../../actions/post'

interface User {
  _id: number
  role: 'admin' | 'user'
}

interface Post {
  _id: number
  text: string
  name: string
  avatar: string
  user: User
  comments: string[]
  date: string
  loading?: boolean
}

interface Props {
  auth?: any
  post: Post
  showActions?: boolean
}

const PostItem: React.FC<Props> = ({
  auth,
  post: { _id, text, name, avatar, user, comments, date, loading },
  showActions = true
}) =>
  loading ? (
    <Spinner />
  ) : (
    <div className='post-users bg-white p-1 my-4'>
      <div>
        <Link to={`/profile/${user._id}`}>
          <img className='round-img' src={avatar} alt='avatar' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {showActions && (
          <div>
            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'> {comments.length}</span>
              )}
            </Link>
            {!auth.loading && (
              <button
                onClick={() => deletePost(_id)}
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

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deletePost })(PostItem)
