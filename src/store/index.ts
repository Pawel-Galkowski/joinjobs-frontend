import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import profileReducer from './slices/profileSlice'
import postReducer from './slices/postSlice'
import formReducer from './slices/formSlice'
import alertReducer from './slices/alertSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  forms: formReducer,
  alert: alertReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['alert/setAlert'],
        ignoredPaths: ['alert.alerts']
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
