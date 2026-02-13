import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Custom hooks for auth
export const useAuth = () => {
  return useAppSelector((state) => state.auth)
}

export const useIsAuthenticated = () => {
  return useAppSelector((state) => state.auth.isAuthenticated)
}

export const useIsAdmin = () => {
  return useAppSelector((state) => state.auth.isAdmin)
}

export const useUser = () => {
  return useAppSelector((state) => state.auth.user)
}

// Custom hooks for profile
export const useProfile = () => {
  return useAppSelector((state) => state.profile)
}

export const useCurrentProfile = () => {
  return useAppSelector((state) => state.profile.profile)
}

export const useProfiles = () => {
  return useAppSelector((state) => state.profile.profiles)
}

// Custom hooks for posts
export const usePosts = () => {
  return useAppSelector((state) => state.post)
}

export const usePostList = () => {
  return useAppSelector((state) => state.post.posts)
}

export const useCurrentPost = () => {
  return useAppSelector((state) => state.post.post)
}

// Custom hooks for forms
export const useForms = () => {
  return useAppSelector((state) => state.forms)
}

export const useFormList = () => {
  return useAppSelector((state) => state.forms.forms)
}

export const useCurrentForm = () => {
  return useAppSelector((state) => state.forms.form)
}

// Custom hooks for alerts
export const useAlerts = () => {
  return useAppSelector((state) => state.alert.alerts)
}
