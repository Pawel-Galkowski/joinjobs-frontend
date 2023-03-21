import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { type RouteInterface } from '../types'

const AdminRoute: React.FC<RouteInterface> = ({
  element,
  auth: { isAuthenticated, loading, isAdmin },
  path
}) =>
  isAuthenticated && !loading && isAdmin ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to='/login' />
  )

const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps)(AdminRoute)
