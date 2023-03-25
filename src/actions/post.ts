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
import dispatch from './customDispatch'

export const getPosts = async () => {
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

export const addLike = async (id: number) => {
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

export const removeLike = async (id: number) => {
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

export const deletePost = async (id: number) => {
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

export const addPost = async (formData: string) => {
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

export const getPost = async (id: number) => {
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

export const addComment = async (postId: number, formData: string) => {
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

export const deleteComment = async (postId: number, commentId: number) => {
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
