import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import type { RouteInterface } from '../types'

const PrivateRoute: React.FC<RouteInterface> = ({
  auth: { isAuthenticated, loading },
  children
}) => {
  if (!isAuthenticated || !loading) {
    <Navigate to='/login' />
  }

  return children
}

const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps)(PrivateRoute)
