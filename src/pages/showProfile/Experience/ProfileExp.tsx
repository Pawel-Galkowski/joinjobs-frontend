import Moment from 'react-moment'

interface Experience {
  experience: any
}

const ProfileExp: React.FC<Experience> = ({ experience: { title, company, from, to, location, description } }) => (
    <div>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      {description.length && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
)

export default ProfileExp
