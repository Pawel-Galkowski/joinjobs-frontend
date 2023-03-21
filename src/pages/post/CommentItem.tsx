import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'

interface User {
  _id: string
}

interface Comment {
  _id: number
  user: User
  date?: string
  name: string
  avatar: string
  text: string
}

interface CommentItemData {
  postId: any
  comment: Comment
  auth: any
}

const CommentItem: React.FC<CommentItemData> = ({ postId, comment, auth }) => (
  <div className='post bg-white'>
    <div>
      <Link to={`/profile/${comment.user._id}`}>
        <img className='round-img' src={comment.avatar} alt='avatar' />
        <h4>{comment.name}</h4>
      </Link>
    </div>
    <div>
      <p>{comment.text}</p>
      <p className='post-date'>
        {'Posted on '}
        <Moment format='YYYY/MM/DD'>{comment.date}</Moment>
      </p>
      {!auth.loading && comment.user === auth.user._id && (
        <button
          className='btn btn-danger'
          onClick={() => deleteComment(postId, comment._id)}
          type='button'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
)
const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps, { deleteComment })(CommentItem)
