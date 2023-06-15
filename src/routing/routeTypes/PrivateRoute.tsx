import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import type { AuthProps } from '../../reducers/auth/types'

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, loading }: AuthProps = useAppSelector(
    ({ auth }) => auth
  )

  if (!isAuthenticated || loading) {
    <Navigate to='/login' />
  }

  return children
}

export default PrivateRoute
