import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { type RouteInterface } from '../types'

const AdminRoute: React.FC<RouteInterface> = ({
  auth: { isAuthenticated, loading, isAdmin },
  children
}) => {
  if (!isAuthenticated || !loading || !isAdmin) {
    <Navigate to='/login' />
  }

  return children
}

const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps)(AdminRoute)
