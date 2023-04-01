import { Navigate } from 'react-router-dom'
import type { RouteInterface } from '../types'
import { useAppSelector } from '../../../hooks'
import { type AuthProps } from '../../../reducers/auth/types'

const PrivateRoute: React.FC<RouteInterface> = ({ children }) => {
  const { isAuthenticated, loading }: AuthProps = useAppSelector((state) => state.auth)

  if (!isAuthenticated || !loading) {
    <Navigate to='/login' />
  }

  return children
}

export default PrivateRoute
