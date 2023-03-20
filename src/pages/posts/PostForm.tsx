import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../../components';
import { addPost } from '../../actions/post';
import { getCurrentProfile } from '../../actions/profile';
import { type ProfileSchema } from '../../types';

interface PostFormData {
  profile: {
    profile: ProfileSchema
    loading: boolean
  }
}

const PostForm = (profile: PostFormData) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    getCurrentProfile()
  }, [])

  const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(target.value)
  }

  return !profile
? (
    <Spinner />
  )
: (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something to create a post</h3>
      </div>
      <form className="form" onSubmit={() => addPost(text)}>
        <textarea
          name="text"
          cols={30}
          rows={5}
          placeholder="Create a post"
          value={text}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-dark" value="Submit" />
      </form>
    </div>
  );
};

const mapStateToProps = ({ profile }: any) => ({ profile })

export default connect(mapStateToProps, { addPost, getCurrentProfile })(
  PostForm
)
