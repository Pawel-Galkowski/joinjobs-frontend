import { createSlice } from '@reduxjs/toolkit'
import type { AuthProps } from './types'

const initialState: AuthProps = {
  isAuthenticated: false,
  loading: false,
  token: '',
  isAdmin: false,
  user: {
    _id: '',
    confirmed: false,
    role: 'user',
    name: '',
    avatar: '',
    date: '',
    email: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    createToken: (state, action) => {
      localStorage.setItem('token', action.payload.token)
      state = {
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    },
    removeToken: (state) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.loading = false
      state.token = ''
    },
    success: (state, action) => {
      state = {
        ...state,
        ...action.payload,
        loading: false
      }
    }
  }
})

export const authActions = authSlice.actions

export default authSlice.reducer
