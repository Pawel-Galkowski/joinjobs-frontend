import { type Dispatch } from 'redux'
import axios from './axios'
import setAlert from './setAlert'
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types'

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get('/api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const addLike = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const removeLike = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const deletePost = (id: string) => async (dispatch: Dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`)

    dispatch({
      type: DELETE_POST,
      payload: { id }
    })

    setAlert('Post Removed', 'success')
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const addPost = (formData: string) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/posts', formData, config)

    dispatch({
      type: ADD_POST,
      payload: res.data
    })

    setAlert('Post Created', 'success')
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getPost = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`)

    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const addComment =
  (postId: string, formData: string) => async (dispatch: Dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post(
        `/api/posts/comment/${postId}`,
        formData,
        config
      )

      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      })

      setAlert('Comment added', 'success')
    } catch (err: any) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.statusText, status: err.status }
      })
    }
  }

export const deleteComment =
  (postId: string, commentId: string) => async (dispatch: Dispatch) => {
    try {
      await axios.delete(`/api/posts/comment/${postId}/${commentId}`)

      dispatch({
        type: REMOVE_COMMENT,
        payload: commentId
      })

      setAlert('Comment removed', 'success')
    } catch (err: any) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.statusText, status: err.status }
      })
    }
  }
