import axiosInstance, { setAuthToken } from '../../utils/axios'
import { authActions } from '../../store/slices/authSlice'
import { alertActions } from '../../store/slices/alertSlice'
import type { AppDispatch } from '../../store'
import type { RegisterPayload, LoginPayload } from '../../store/types'

// Load user from token
export const loadUser = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem('token')
  if (!token) {
    dispatch(authActions.removeToken())
    return
  }

  try {
    setAuthToken(token)
    const res = await axiosInstance.get('/api/auth')
    dispatch(authActions.userLoaded(res.data))
  } catch (err) {
    dispatch(authActions.removeToken())
  }
}

// Register user
export const registerUser = (data: RegisterPayload & { confirmPassword?: string }) => async (dispatch: AppDispatch) => {
  dispatch(authActions.setLoading(true))
  try {
    const { confirmPassword, ...payload } = data
    const res = await axiosInstance.post('/api/users', payload)
    dispatch(authActions.createToken(res.data))
    dispatch(alertActions.setAlert({
      message: 'Registration successful! Please verify your email.',
      type: 'success'
    }))
  } catch (err: any) {
    const message = err.response?.data?.message || 'Registration failed'
    dispatch(alertActions.setAlert({
      message,
      type: 'error'
    }))
    dispatch(authActions.removeToken())
  }
}

// Login user
export const loginUser = (data: LoginPayload) => async (dispatch: AppDispatch) => {
  dispatch(authActions.setLoading(true))
  try {
    const res = await axiosInstance.post('/api/auth', data)
    dispatch(authActions.createToken(res.data))
    setAuthToken(res.data.token)
    dispatch(alertActions.setAlert({
      message: 'Login successful!',
      type: 'success'
    }))
  } catch (err: any) {
    const message = err.response?.data?.message || 'Login failed'
    dispatch(alertActions.setAlert({
      message,
      type: 'error'
    }))
    dispatch(authActions.removeToken())
  }
}

// Logout user
export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(authActions.logout())
  dispatch(alertActions.setAlert({
    message: 'Logged out successfully',
    type: 'info'
  }))
}

// Recovery password
export const recoveryPassword = (email: string) => async (dispatch: AppDispatch) => {
  try {
    await axiosInstance.post('/api/users/recovery', { email })
    dispatch(alertActions.setAlert({
      message: 'Recovery email sent! Check your inbox.',
      type: 'success'
    }))
  } catch (err: any) {
    const message = err.response?.data?.message || 'Recovery request failed'
    dispatch(alertActions.setAlert({
      message,
      type: 'error'
    }))
  }
}
