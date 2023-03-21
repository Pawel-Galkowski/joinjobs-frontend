import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../../components/spinner/Spinner'
import ProfileTop from '../ProfileHeader/ProfileTop'
import { getProfileById } from '../../../actions/profile'
import ProfileAbout from '../About/ProfileAbout'
import ProfileExperience from '../Experience/ProfileExp'
import ProfileEducation from '../Education/ProfileEdu'
import ProfileGithub from '../Github/ProfileGithub'

const Profile: React.FC<any> = ({
  match,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getProfileById(match.params.id)
  }, [getProfileById, match.params.id])

  return loading ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      {profile === null || profile === undefined ? (
        <Spinner />
      ) : (
        <div>
          <div className='profileButtons'>
            <Link to='/profiles' className='btn btn-light'>
              Back to profiles
            </Link>
            {!!auth &&
              auth.isAuthenticated &&
              !auth.loading &&
              auth.user &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit profile
                </Link>
            )}
          </div>
          <div className='profile-page'>
            <ProfileTop {...profile} />
            <ProfileAbout profile={profile} />
            <div className='flex-row'>
              <div className='profile-exp bg-white p2'>
                <h2 className='text-primary'>Experience</h2>
                {profile.experience.length > 0 ? (
                  <>
                    {profile.experience.map((experience: any) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No experience credetials</h4>
                )}
              </div>
              <div className='profile-edu bg-white p-2'>
                <h2 className='text-primary'>Education</h2>
                {profile.education.length > 0 ? (
                  <>
                    {profile.education.map((education: any) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No education credetials</h4>
                )}
              </div>
            </div>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
