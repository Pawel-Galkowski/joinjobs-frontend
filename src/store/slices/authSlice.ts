import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, User } from '../types'

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  token: localStorage.getItem('token') || null,
  isAdmin: false,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoaded: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
      state.isAdmin = action.payload.role === 'admin'
    },
    createToken: (state, action: PayloadAction<{ token: string; user?: User }>) => {
      state.token = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      if (action.payload.user) {
        state.user = action.payload.user
        state.isAdmin = action.payload.user.role === 'admin'
      }
      localStorage.setItem('token', action.payload.token)
    },
    removeToken: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.loading = false
      state.user = null
      state.isAdmin = false
      localStorage.removeItem('token')
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.user = null
      state.isAdmin = false
      localStorage.removeItem('token')
    },
    success: (state, action: PayloadAction<{ token?: string; user?: User }>) => {
      if (action.payload.token) {
        state.token = action.payload.token
        localStorage.setItem('token', action.payload.token)
      }
      if (action.payload.user) {
        state.user = action.payload.user
        state.isAuthenticated = true
      }
      state.loading = false
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
