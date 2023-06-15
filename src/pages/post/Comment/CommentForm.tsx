import { useState, useEffect, useCallback } from 'react'
import { addComment } from '../../../actions/post'
import { getCurrentProfile } from '../../../actions/profile'
import { Spinner } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'

interface CommentFormData {
  postId: string
}

const CommentForm: React.FC<CommentFormData> = ({ postId }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const { loading, profile } = useAppSelector((state) => state.profile)
  const [text, setText] = useState<string>('')

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }, [])

  const handleAddComment = useCallback(() => {
    dispatch(addComment(postId, text))
  }, [])

  if (!profile || loading) {
    return <Spinner />
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a comment</h3>
      </div>
      <form className='form my-1' onSubmit={handleAddComment}>
        <textarea
          name='text'
          cols={30}
          rows={5}
          placeholder='Create a comment'
          value={text}
          onChange={onChange}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  )
}

export default CommentForm
