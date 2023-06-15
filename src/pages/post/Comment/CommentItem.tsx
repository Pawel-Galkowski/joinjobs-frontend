import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { deleteComment } from '../../../actions/post'
import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type CommentProps } from '../../../reducers/post/types'

interface CommentItemData {
  postId: string
  comment: CommentProps
}

const CommentItem: React.FC<CommentItemData> = ({ postId, comment }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const { loading, user } = useAppSelector((state) => state.auth)

  const handleDelateComment = useCallback(() => {
    dispatch(deleteComment(postId, comment._id))
  }, [])

  return (
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
        {!loading && comment.user._id === user._id && (
          <button
            className='btn btn-danger'
            onClick={handleDelateComment}
            type='button'
          >
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
  )
}

export default CommentItem
