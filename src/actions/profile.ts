import axios from './axios'
import setAlert from './setAlert'

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILES,
  GET_EXPERIENCE,
  GET_EDUCATION,
  GET_REPOS,
  POST_EXPERIENCE,
  ACCOUNT_DELETED2,
  CLEAR_USERS,
  GET_USERS,
  USERS_ERROR,
  POST_EDUCATION,
  ALL_USERS
} from './types'
import dispatch from './customDispatch'
import { type ProfileSchema } from '../types'

export const getCurrentProfile = async () => {
  try {
    const res = await axios.get('/api/profile/me')

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getCurrentExperience = async (ExpId: number) => {
  try {
    const res = await axios.get(`/api/profile/experience/${ExpId}`)

    dispatch({
      type: GET_EXPERIENCE,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const setCurrentExperience = async (expId: number, formData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(
      `/api/profile/experience/${expId}`,
      formData,
      config
    )

    dispatch({
      type: POST_EXPERIENCE,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getCurrentEducation = async (eduId: number) => {
  try {
    const res = await axios.get(`/api/profile/education/${eduId}`)

    dispatch({
      type: GET_EDUCATION,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const setCurrentEducation = async (eduId: number, formData: JSON) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(
      `/api/profile/education/${eduId}`,
      formData,
      config
    )
    dispatch({
      type: POST_EDUCATION,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({ type: CLEAR_PROFILE })
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getProfiles = async () => {
  dispatch({ type: CLEAR_PROFILE })
  try {
    const res = await axios.get('/api/profile')

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getUsers = async () => {
  dispatch({ type: CLEAR_USERS })
  try {
    const res = await axios.get('/api/profile/getusers')

    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getAllusers = async () => {
  dispatch({ type: CLEAR_USERS })
  try {
    const res = await axios.get('/api/profile/getAllusers')

    dispatch({
      type: ALL_USERS,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: USERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getProfileById = async (userId: number) => {
  dispatch({ type: CLEAR_PROFILE })
  try {
    const res = await axios.get(`/api/profile/user/${userId}`)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const getGithubRepos = async (username: string) => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`)

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const createProfile = async (
  formData: ProfileSchema,
  history: string[],
  edit = false
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res: any = axios.post('/api/profile', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

    setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')

    if (!edit) {
      history.push('/dashboard')
    }
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) =>
        setAlert(error.msg, 'danger')
      )
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const addExperience = async (formData: any, history: string[]) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res: any = axios.put('/api/profile/experience', formData, config)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    setAlert('Experience Added', 'success')
    history.push('/dashboard')
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) =>
        setAlert(error.msg, 'danger')
      )
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const editEducation = async (
  formData: JSON,
  history: string[],
  edit: boolean = false
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res: any = axios.post('/api/profile/education', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

    setAlert(edit ? 'Profile Updated' : 'Education Added', 'success')

    if (!edit) {
      history.push('/dashboard')
    }
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) =>
        setAlert(error.msg, 'danger')
      )
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const addEducation = async (formData: any, history: string[]) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res: any = axios.put('/api/profile/education', formData, config)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    setAlert('Education Added', 'success')
    history.push('/dashboard')
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) =>
        setAlert(error.msg, 'danger')
      )
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const deleteExperience = async (id: number) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    setAlert('Experience Removed', 'success')
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const deleteEducation = async (id: number) => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`)

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
    setAlert('Education Removed', 'success')
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const deleteUserAccount = async (userId: number) => {
  try {
    await axios.delete(`/api/profile/${userId}`)

    dispatch({
      type: CLEAR_PROFILE
    })

    dispatch({
      type: ACCOUNT_DELETED2
    })

    setAlert('Account permamently deleted', 'warning')
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    })
  }
}

export const deleteAccount = async () => {
  try {
    await axios.delete('/api/profile/')

    dispatch({
      type: CLEAR_PROFILE
    })

    dispatch({
      type: ACCOUNT_DELETED
    })

    setAlert('Account permamently deleted', 'warning')
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}
