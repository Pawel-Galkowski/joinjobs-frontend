import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spinner } from '../../components'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

// Lazy loading for better performance
const LandingPage = React.lazy(() => import('../layout/LandingPage'))
const NotFoundPage = React.lazy(() => import('../layout/NotFoundPage'))
const LoginPage = React.lazy(() => import('../auth/LoginPage'))
const RegisterPage = React.lazy(() => import('../auth/RegisterPage'))
const RecoveryPage = React.lazy(() => import('../auth/RecoveryPage'))
const DashboardPage = React.lazy(() => import('../layout/DashboardPage'))
const ProfileListPage = React.lazy(() => import('../profile/ProfileListPage'))
const ProfileDetailPage = React.lazy(() => import('../profile/ProfileDetailPage'))
const PostListPage = React.lazy(() => import('../post/PostListPage'))
const PostDetailPage = React.lazy(() => import('../post/PostDetailPage'))
const FormsListPage = React.lazy(() => import('../form/FormsListPage'))
const FormDetailPage = React.lazy(() => import('../form/FormDetailPage'))
const AdminPage = React.lazy(() => import('../admin/AdminPage'))

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner fullPage />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Profile routes */}
        <Route path="/profiles" element={<ProfileListPage />} />
        <Route path="/profiles/:id" element={<ProfileDetailPage />} />
        <Route
          path="/profile/create"
          element={
            <PrivateRoute>
              <ProfileDetailPage />
            </PrivateRoute>
          }
        />

        {/* Post routes */}
        <Route
          path="/posts"
          element={
            <PrivateRoute>
              <PostListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <PostDetailPage />
            </PrivateRoute>
          }
        />

        {/* Form routes */}
        <Route
          path="/forms"
          element={
            <PrivateRoute>
              <FormsListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/forms/:id"
          element={
            <PrivateRoute>
              <FormDetailPage />
            </PrivateRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
