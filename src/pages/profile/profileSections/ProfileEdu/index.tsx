import Moment from 'react-moment'
import type { EducationProps } from '../../../../reducers/profile/types'

export const ProfileEdu: React.FC<{ education: EducationProps }> = ({
  education: { school, degree, from, to, fieldofstudy, description }
}) => (
  <>
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
  </>
)
