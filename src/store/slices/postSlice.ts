import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PostState, Post, Comment } from '../types'

const initialState: PostState = {
  posts: [],
  post: null,
  loading: false,
  error: null
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      state.loading = false
    },
    setPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload
      state.loading = false
    },
    createPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload)
      state.loading = false
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(p => p._id === action.payload._id)
      if (index !== -1) {
        state.posts[index] = action.payload
      }
      state.loading = false
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(p => p._id !== action.payload)
      state.loading = false
    },
    addComment: (state, action: PayloadAction<{ postId: string; comment: Comment }>) => {
      const post = state.posts.find(p => p._id === action.payload.postId)
      if (post) {
        post.comments.unshift(action.payload.comment)
      }
    },
    deleteComment: (state, action: PayloadAction<{ postId: string; commentId: string }>) => {
      const post = state.posts.find(p => p._id === action.payload.postId)
      if (post) {
        post.comments = post.comments.filter(c => c._id !== action.payload.commentId)
      }
    },
    likePost: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const post = state.posts.find(p => p._id === action.payload.postId)
      if (post && !post.likes.includes(action.payload.userId)) {
        post.likes.push(action.payload.userId)
      }
    },
    unlikePost: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const post = state.posts.find(p => p._id === action.payload.postId)
      if (post) {
        post.likes = post.likes.filter(id => id !== action.payload.userId)
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    }
  }
})

export const postActions = postSlice.actions
export default postSlice.reducer
