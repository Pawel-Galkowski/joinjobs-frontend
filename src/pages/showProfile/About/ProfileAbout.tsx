import React from 'react';

function ProfileAbout ({
  profile: {
    bio,
    user: { name }
  }
}: {
  profile: any
}) {
  return (
    <div className="profile-about bg-light">
      {bio && (
        <>
          <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className="line" />
        </>
      )}
    </div>
  )
}

export default ProfileAbout
