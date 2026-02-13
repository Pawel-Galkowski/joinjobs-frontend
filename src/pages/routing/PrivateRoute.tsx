import React from 'react'
import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../../hooks'
import { Spinner } from '../../components'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default PrivateRoute
