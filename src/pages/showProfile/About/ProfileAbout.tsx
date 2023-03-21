const ProfileAbout: React.FC<{
  profile: any
}> = ({
  profile: {
    bio,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about bg-light'>
      {bio && (
        <>
          <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className='line' />
        </>
      )}
    </div>
  )
}

export default ProfileAbout
