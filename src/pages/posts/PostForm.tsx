import { useState, useEffect, useCallback } from 'react'
import { Spinner } from '../../components'
import { addPost } from '../../actions/post'
import { getCurrentProfile } from '../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type ProfileProps } from '../../reducers/profile/types'

const PostForm: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { profile, loading }: ProfileProps = useAppSelector((state) => state.profile.profile)
  const [text, setText] = useState<string>('')

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }, [])

  const handleAddPost = useCallback(() => {
    dispatch(addPost(text))
  }, [])

  if (!profile || loading) {
    return <Spinner />
  }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something to create a post</h3>
      </div>
      <form
        className='form'
        onSubmit={handleAddPost}
      >
        <textarea
          name='text'
          cols={30}
          rows={5}
          placeholder='Create a post'
          value={text}
          onChange={onChange}
          required
        />
        <input type='submit' className='btn btn-dark' value='Submit' />
      </form>
    </div>
  )
}

export default PostForm
