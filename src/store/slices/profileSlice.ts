import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProfileState, Profile } from '../types'

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  loading: false,
  error: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfiles: (state, action: PayloadAction<Profile[]>) => {
      state.profiles = action.payload
      state.loading = false
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload
      state.loading = false
    },
    createProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload
      state.loading = false
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload
      state.loading = false
    },
    deleteProfile: (state) => {
      state.profile = null
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearProfile: (state) => {
      state.profile = null
    }
  }
})

export const profileActions = profileSlice.actions
export default profileSlice.reducer
