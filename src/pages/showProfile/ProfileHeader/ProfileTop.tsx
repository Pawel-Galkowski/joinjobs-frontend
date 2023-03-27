import { useAppSelector } from '../../../hooks'
import { type ProfileProps } from './types'

const ProfileTop: React.FC = () => {
  const {
    status,
    skills,
    company,
    location,
    website,
    social,
    user,
    profileImg
  }: ProfileProps = useAppSelector((state) => state.profile.profile)

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
          {social?.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}
          {social?.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}
          {social?.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
          {social?.instagram && (
            <a
              href={social.instagram}
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
