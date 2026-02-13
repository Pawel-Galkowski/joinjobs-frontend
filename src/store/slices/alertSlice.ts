import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import type { AlertState, Alert } from '../types'

const initialState: AlertState = {
  alerts: []
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<Omit<Alert, 'id'>>) => {
      const id = uuidv4()
      state.alerts.push({
        ...action.payload,
        id
      })
      // Auto-remove alert after 5 seconds
      setTimeout(() => {
        state.alerts = state.alerts.filter(a => a.id !== id)
      }, 5000)
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload)
    },
    clearAlerts: (state) => {
      state.alerts = []
    }
  }
})

export const alertActions = alertSlice.actions
export default alertSlice.reducer
