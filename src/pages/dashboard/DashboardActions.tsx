import { Link } from 'react-router-dom'

interface Props {
  profile: any
}

const DashboardActions: React.FC<Props> = ({ profile }) => {
  return (
    <div className='dash-buttons'>
      {profile && (
        <Link className='nav-link' to='/edit-profile'>
          <div className='nav-link-icon'>
            <i className='fas fa-user-circle' />
          </div>
          {'Edit Profile '}
        </Link>
      )}
      <Link className='nav-link' to='/education'>
        <div className='nav-link-icon'>
          <i className='fas fa-graduation-cap' />
        </div>
        {'Add Education '}
      </Link>
      <Link className='nav-link' to='/experience'>
        <div className='nav-link-icon'>
          <i className='fab fa-black-tie' />
        </div>
        {'Add Experience '}
      </Link>
    </div>
  )
}

export default DashboardActions
