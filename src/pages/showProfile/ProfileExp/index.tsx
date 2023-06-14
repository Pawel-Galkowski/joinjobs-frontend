import Moment from 'react-moment'
import type { ExperienceProps } from '../../../reducers/profile/types'

export const ProfileExp: React.FC<{ experience: ExperienceProps }> = ({
  experience: { title, company, from, to, location, description }
}) => (
  <>
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
  </>
)
