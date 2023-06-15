import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import profileReducer from './reducers/profile/Profile'
import postReducer from './reducers/post/Post'
import formReducer from './reducers/form/Form'

const reducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
  forms: formReducer
})

export const store = configureStore({
  reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
