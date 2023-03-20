import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import PostItem from '../posts/PostItem';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { getPost } from '../../actions/post';
import { getProfiles } from '../../actions/profile';
import { type CommentSchema } from '../../types';

interface PostData {
  post?: any
  profile?: any
  match?: any
}

const Post = ({ post, profile, match }: PostData) => {
  useEffect(() => {
    getPost(match.params.id)
    getProfiles()
  }, [getPost, getProfiles])

  return post.loading || !post.post || profile.loading
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <Link to="/posts" className="btn btn-light">
        Back to Posts
      </Link>
      <div className="mainPost">
        <PostItem
          post={post.post}
          showActions={false}
          profile={profile.profiles}
        />
      </div>
      <hr />
      <CommentForm postId={post.post._id} />
      <div className="comments">
        {post.comments.map((comment: CommentSchema) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={post.post._id}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ post, profile }: any) => ({ post, profile })

export default connect(mapStateToProps, { getPost, getProfiles })(Post)
