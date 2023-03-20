import { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import PostItem from './PostItem';
import { getProfiles } from '../../actions/profile';
import { getPosts } from '../../actions/post';
import { type PostSchema } from '../../types';
import PostForm from './PostForm';

interface PostsData {
  profile?: any
  post: {
    posts: PostSchema[]
    loading: boolean
  }
}

const Posts: React.FC<PostsData> = ({ profile, post: { posts, loading } }) => {
  useEffect(() => {
    getProfiles()
    getPosts()
  }, [getPosts, getProfiles])

  return !!loading || profile.loading
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' Welcome to the community'}
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post: PostSchema) => (
          <PostItem key={post._id} post={post} profile={profile.profiles} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ post, profile }: any) => ({ post, profile })

export default connect(mapStateToProps, { getPosts, getProfiles })(Posts)
