import axios from './axios'
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
import dispatch from './customDispatch'
import { useAppDispatch } from '../hooks'

export interface Register {
  name: string
  email: string
  password: string
  role?: string
}

export const loadUser = () => async () => {
  const dispatch = useAppDispatch()
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token)
  // }
  setAuthToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRmZTMzOTQ4ZjM3NjA0Nzc0YzE3NzI2In0sImlhdCI6MTY3OTc3MDUxOSwiZXhwIjoxNjgwMTMwNTE5fQ.NI0bagQfVuJIiJ6HQ1QfljrmA97c7CEBrTdhAj65dPw'
  )

  try {
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({ type: AUTH_ERROR })
    console.error(err)
  }
}

// register user
export const register = async (reg: Register) => {
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
export const login = async (data: Login) => {
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
    console.log('catch')
    const { errors } = err.response.data

    if (errors) {
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({ type: LOGIN_FAIL })
  }
}

interface Authorization {
  email: string
  token: string
}

// Authorize User
export const authorize = async (items: Authorization) => {
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
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Set Recovery Token
export const recoveryPassword = async (email: string) => {
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
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Set new password
export const changePassword = async (
  email: string,
  password: string,
  token: string
) => {
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
      errors.forEach((error: any) => setAlert(error.msg, 'danger'))
    }

    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Log user out
export const logout = () => {
  dispatch({ type: LOGOUT })
  dispatch({ type: CLEAR_PROFILE })
}
