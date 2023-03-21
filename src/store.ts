import { configureStore } from '@reduxjs/toolkit'
import {
  authReducer,
  profileReducer,
  postReducer,
  formReducer
} from './reducers'

export const store = configureStore({
  reducer: {
    // alert,
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    forms: formReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
