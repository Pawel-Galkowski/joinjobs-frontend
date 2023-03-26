import { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'
import { getCurrentProfile } from '../../actions/profile'
import { type ProfileSchema } from '../../types'
import { Spinner } from '../../components'

interface CommentFormData {
  postId: number
  profile: {
    profile: ProfileSchema
  }
}

function CommentForm ({ postId, profile: { profile } }: CommentFormData) {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    getCurrentProfile()
  }, [])

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(target.value)
    },
    []
  )

  return !profile
    ? (
    <Spinner />
      )
    : (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form className="form my-1" onSubmit={() => { addComment(postId, text) }}>
        <textarea
          name="text"
          cols={30}
          rows={5}
          placeholder="Create a comment"
          value={text}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
      )
}

const mapStateToProps = ({ profile }: any) => ({ profile })

export default connect(mapStateToProps, { addComment, getCurrentProfile })(
  CommentForm
)
