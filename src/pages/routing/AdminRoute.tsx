import React from 'react'
import { Navigate } from 'react-router-dom'
import { useIsAdmin, useIsAuthenticated } from '../../hooks'

interface AdminRouteProps {
  children: React.ReactNode
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated()
  const isAdmin = useIsAdmin()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default AdminRoute
