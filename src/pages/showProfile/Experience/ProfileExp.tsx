import React from 'react';
import Moment from 'react-moment';

function ProfileExp ({
  experience: { title, company, from, to, location, description }
}: {
  experience: any
}) {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -
        {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      {description === '' ? null
: (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  )
}

export default ProfileExp
