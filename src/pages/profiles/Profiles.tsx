import { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

function Profiles ({ profile: { profiles, loading } }: { profile: any }) {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return loading
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop" /> Browse and connect with
        developers
      </p>
      <div className="profiles">
        {profiles.length > 0
? (
          profiles.map((profile: any) => (
            <ProfileItem key={profile._id} {...profile} />
          ))
        )
: (
          <h4>No Profiles found...</h4>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles)
