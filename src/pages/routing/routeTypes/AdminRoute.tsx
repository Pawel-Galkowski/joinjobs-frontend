import { Navigate } from 'react-router-dom'
import type { RouteInterface } from '../types'
import { useAppSelector } from '../../../hooks'
import type { AuthProps } from '../../../reducers/auth/types'

const AdminRoute: React.FC<RouteInterface> = ({ children }) => {
  const { isAuthenticated, loading, isAdmin }: AuthProps = useAppSelector(
    ({ auth }) => auth
  )

  if (!isAuthenticated || loading || !isAdmin) {
    <Navigate to='/login' />
  }

  return children
}

export default AdminRoute
