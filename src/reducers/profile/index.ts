import { createSlice } from '@reduxjs/toolkit'
import type { ProfileProps } from './types'

const initialState: ProfileProps = {
  loading: true
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = action.payload
      state.loading = false
    },
    updateProfiles: (state, action) => {
      state.profiles = action.payload
      //   state.profiles = { ...state.profiles, ...action.payload }
      state.loading = false
    },
    clearProfile: (state) => {
      state.profile = undefined
      state.loading = false
    },
    clearRepos: (state) => {
      state.repos = []
      state.loading = false
    },
    getRepos: (state, action) => {
      state.repos = action.payload
      state.loading = false
    }
  }
})

export const profileActions = profileSlice.actions

export default profileSlice.reducer
