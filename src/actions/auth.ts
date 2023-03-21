import axios from './axios'
import { type Dispatch } from 'redux'
import setAuthToken from '../utils/setAuthToken'
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
import customDispatch from './customDispatch'

export interface Register {
  name: string
  email: string
  password: string
  role?: string
}

export const loadUser = () => async (dispatch: Dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// register user
export const register = (reg: Register) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const body = JSON.stringify(reg)
    const res = await axios.post('/api/users', body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err: any) {
    const errors = err.response

    if (errors) {
      customDispatch(setAlert('Email is in use', 'danger'))
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
export const login = (data: Login) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post('/api/auth', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch(loadUser() as any)
  } catch (err: any) {
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) =>
        customDispatch(setAlert(error.msg, 'danger'))
      )
    }

    dispatch({
      type: LOGIN_FAIL
    })
  }
}

interface Authorization {
  email: string
  token: string
}

// Authorize User
export const authorize =
  (items: Authorization) => async (dispatch: Dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(items.email)
    try {
      const res = await axios.post(
        `/api/users/confirmation/${items.token}`,
        body,
        config
      )
      dispatch({
        type: ACCOUNT_CONFIRMED,
        payload: res.data
      })
    } catch (err: any) {
      const { errors } = err.response.data

      if (errors) {
        errors.forEach((error: any) =>
          customDispatch(setAlert(error.msg, 'danger'))
        )
      }

      dispatch({
        type: AUTH_ERROR
      })
    }
  }

// Set Recovery Token
export const recoveryPassword =
  (email: string) => async (dispatch: Dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ email })
    try {
      const res = await axios.post('/api/users/recovery', body, config)
      dispatch({
        type: RECOVERY_SEND,
        payload: res.data
      })
      setAlert('Email send', 'success')
    } catch (err: any) {
      const { errors } = err.response.data

      if (errors) {
        errors.forEach((error: any) =>
          customDispatch(setAlert(error.msg, 'danger'))
        )
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
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify({ email, password })
      try {
        const res = await axios.post(`/api/users/recovery/${token}`, body, config)
        dispatch({
          type: ACCOUNT_CONFIRMED,
          payload: res.data
        })

        setAlert('Password Changed', 'success')
      } catch (err: any) {
        const { errors } = err.response.data

        if (errors) {
          errors.forEach((error: any) =>
            customDispatch(setAlert(error.msg, 'danger'))
          )
        }

        dispatch({
          type: AUTH_ERROR
        })
      }
    }

// Log user out
export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT })
  dispatch({ type: CLEAR_PROFILE })
}
