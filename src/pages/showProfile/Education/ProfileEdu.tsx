import Moment from 'react-moment'

const ProfileEdu: React.FC<any> = ({
  education: { school, degree, from, to, fieldofstudy, description }
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Field of study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      {description === '' ? null : (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  )
}

export default ProfileEdu
