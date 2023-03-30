import setHeaderAuthToken from '../utils/setAuthToken'
import axios from './axios'
import setAlert from './setAlert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE,
  ACCOUNT_CONFIRMED,
  RECOVERY_SEND
} from './types'
import { type Dispatch } from 'redux'

const defaultHeaderConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const loadUser = () => async (dispatch: Dispatch) => {
  if (localStorage.token) {
    setHeaderAuthToken(localStorage.token)
  } else {
    return dispatch({ type: AUTH_ERROR })
  }

  try {
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: AUTH_ERROR })
  }
}

export interface Register {
  name: string
  email: string
  password: string
  role?: string
}

// register user
export const register = (reg: Register) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(
      '/api/users',
      JSON.stringify(reg),
      defaultHeaderConfig
    )

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err: any) {
    const errors = err.response

    if (errors) {
      setAlert('Email is in use', 'danger')
    }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}

interface Login {
  email: string
  password: string
}

// Login User
export const postLogin =
  ({ email, password }: Login) =>
    async (dispatch: Dispatch) => {
      const body = JSON.stringify({ email, password })
      try {
        const res = await axios.post(
          '/api/auth',
          body,
          defaultHeaderConfig
        )
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      } catch (err: any) {
        setAlert(err.response.data, 'danger')
        dispatch({ type: LOGIN_FAIL })
      }
    }

interface Authorization {
  email: string
  token: string
}

// Authorize User
export const authorize =
  (items: Authorization) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `/api/users/confirmation/${items.token}`,
        JSON.stringify(items.email),
        defaultHeaderConfig
      )
      dispatch({
        type: ACCOUNT_CONFIRMED,
        payload: res.data
      })
    } catch (err: any) {
      const { errors } = err.response.data

      if (errors) {
        errors.forEach((error: any) => setAlert(error.msg, 'danger'))
      }

      dispatch({
        type: AUTH_ERROR
      })
    }
  }

// Set Recovery Token
export const recoveryPassword =
  (email: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        '/api/users/recovery',
        JSON.stringify({ email }),
        defaultHeaderConfig
      )
      dispatch({
        type: RECOVERY_SEND,
        payload: res.data
      })
      setAlert('Email send', 'success')
    } catch (err: any) {
      const { errors } = err.response.data

      if (errors) {
        errors.forEach((error: any) => setAlert(error.msg, 'danger'))
      }

      dispatch({
        type: AUTH_ERROR
      })
    }
  }

// Set new password
export const changePassword =
  (email: string, password: string, token: string) =>
    async (dispatch: Dispatch) => {
      try {
        const res = await axios.post(
        `/api/users/recovery/${token}`,
        JSON.stringify({ email, password }),
        defaultHeaderConfig
        )
        dispatch({
          type: ACCOUNT_CONFIRMED,
          payload: res.data
        })

        setAlert('Password Changed', 'success')
      } catch (err: any) {
        const { errors } = err.response.data

        if (errors) {
          errors.forEach((error: any) => setAlert(error.msg, 'danger'))
        }

        dispatch({
          type: AUTH_ERROR
        })
      }
    }

// Log user out
export const logout = () => async (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT })
  dispatch({ type: CLEAR_PROFILE })
}
