import { Link } from 'react-router-dom';

interface UserProps {
  _id: string
  name: any
  avatar: any
}

interface Props {
  user: UserProps
  status: string
  company?: string
  location: any
  skills: any
  profileImg: any
}

const ProfileItem: React.FC<Props> = ({
  user: { _id, name, avatar },
  status,
  company,
  location,
  skills,
  profileImg
}) => (
  <div className="paddingSection">
    <div className="profile bg-white">
      <img src={profileImg || avatar} alt="avatar" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status}
          {company && ` at ${company}`}
        </p>
        {location && <p className="my-1"> {location}</p>}
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill: any, index: number) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default ProfileItem
