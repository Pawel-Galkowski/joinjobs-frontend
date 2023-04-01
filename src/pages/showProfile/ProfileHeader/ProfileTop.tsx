import { useAppSelector } from '../../../hooks'
import { type ProfileType } from '../../../reducers/profile/types'

const ProfileTop: React.FC = () => {
  const {
    status,
    skills,
    company,
    location,
    website,
    socialMedia,
    user,
    profileImg
  }: ProfileType = useAppSelector((state) => state.profile.profile)

  return (
    <div className="profile-top">
      <div className="profile-profile bg-primary">
        <img className="round-img" src={profileImg || user?.avatar} alt="avatar" />
        <h1 className="large">{user?.name}</h1>
        <p className="middle-text">
          {`${status} ${company && `at ${company}`}`}
        </p>
        <p className="lead">{location}</p>
        <div className="icons">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x" />
            </a>
          )}
          {socialMedia?.twitter && (
            <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}
          {socialMedia?.facebook && (
            <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {socialMedia?.linkedin && (
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}
          {socialMedia?.youtube && (
            <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
          {socialMedia?.instagram && (
            <a
              href={socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          )}
        </div>
      </div>
      <div className="profile-skills bg-white">
        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          {skills?.map((skill: string, index: number) => (
            <div key={`${skill}${index}`}>
              <i className="fas fa-check" />
              {` ${skill}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileTop
