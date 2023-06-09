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
import { type Dispatch } from 'redux'
import { useNavigate } from 'react-router-dom'
import { type ProfileType } from '../reducers/profile/types'

const defaultHeaderConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getCurrentProfile = () => async (dispatch: Dispatch) => {
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

export const getCurrentExperience =
  (expId: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`/api/profile/experience/${expId}`)

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

export const setCurrentExperience =
  (expId: string, formData: any) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `/api/profile/experience/${expId}`,
        formData,
        defaultHeaderConfig
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

export const getCurrentEducation =
  (eduId: string) => async (dispatch: Dispatch) => {
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

export const setCurrentEducation =
  (eduId: string, formData: JSON) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `/api/profile/education/${eduId}`,
        formData,
        defaultHeaderConfig
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

export const getProfiles = () => async (dispatch: Dispatch) => {
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

export const getUsers = () => async (dispatch: Dispatch) => {
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

export const getAllusers = () => async (dispatch: Dispatch) => {
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

export const getProfileById =
  (userId: string) => async (dispatch: Dispatch) => {
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

export const getGithubRepos =
  (username: string) => async (dispatch: Dispatch) => {
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

export const createProfile =
  (formData: ProfileType, edit = false) =>
    async (dispatch: Dispatch) => {
      const navigate = useNavigate()
      try {
        const res: any = axios.post('/api/profile', formData, defaultHeaderConfig)

        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })

        setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')

        if (!edit) {
          navigate('/dashboard')
        }
      } catch (err: any) {
        const { errors } = err.response.data

        if (errors) {
          errors.forEach((error: any) => setAlert(error.msg, 'danger'))
        }

        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
    }

export const addExperience = (formData: any) => async (dispatch: Dispatch) => {
  const navigate = useNavigate()
  try {
    const res: any = axios.put(
      '/api/profile/experience',
      formData,
      defaultHeaderConfig
    )

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    setAlert('Experience Added', 'success')
    navigate('/dashboard')
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const editEducation =
  (formData: JSON, edit: boolean = false) =>
    async (dispatch: Dispatch) => {
      const navigate = useNavigate()
      try {
        const res: any = axios.post(
          '/api/profile/education',
          formData,
          defaultHeaderConfig
        )

        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })

        setAlert(edit ? 'Profile Updated' : 'Education Added', 'success')

        if (!edit) {
          navigate('/dashboard')
        }
      } catch (err: any) {
        const { errors } = err.response.data

        if (errors) {
          errors.forEach((error: any) => setAlert(error.msg, 'danger'))
        }

        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
    }

export const addEducation = (formData: any) => async (dispatch: Dispatch) => {
  const navigate = useNavigate()
  try {
    const res: any = axios.put(
      '/api/profile/education',
      formData,
      defaultHeaderConfig
    )

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    setAlert('Education Added', 'success')
    navigate('/dashboard')
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

export const deleteExperience = (id: string) => async (dispatch: Dispatch) => {
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

export const deleteEducation = (id: string) => async (dispatch: Dispatch) => {
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

export const deleteUserAccount =
  (userId: string) => async (dispatch: Dispatch) => {
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

export const deleteAccount = () => async (dispatch: Dispatch) => {
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
