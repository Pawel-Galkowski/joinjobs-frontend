import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { type RouteInterface } from '../types';

const PrivateRoute: React.FC<RouteInterface> = ({
  element,
  auth: { isAuthenticated, loading },
  path
}) =>
  !isAuthenticated && !loading
? (
    <Navigate to="/login" />
  )
: (
    <Route path={path} element={element} />
  )

const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps)(PrivateRoute)
