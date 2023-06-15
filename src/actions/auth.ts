import { authActions, profileActions } from '../reducers'
import setHeaderAuthToken from '../utils/setAuthToken'
import axios from './axios'
import setAlert from './setAlert'
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
    return dispatch(authActions.removeToken())
  }

  try {
    const res = await axios.get('/api/auth')
    dispatch(authActions.userLoaded(res.data))
  } catch (err) {
    dispatch(authActions.removeToken())
  }
}

export interface Register {
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
}

// register user
export const register = (reg: Register) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(
      '/api/users',
      JSON.stringify(reg),
      defaultHeaderConfig
    )

    dispatch(authActions.createToken(res.data))
  } catch ({ response }) {
    response && setAlert('Email is in use', 'danger')
    dispatch(authActions.removeToken())
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
        dispatch(authActions.createToken(res.data))
      } catch ({ response }) {
        response && setAlert(response.data, 'danger')
        dispatch(authActions.removeToken())
      }
    }

interface Authorization {
  email: string
  token: string
}

// Authorize User
export const authorize =
  ({ email, token }: Authorization) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(
        `/api/users/confirmation/${token}`,
        JSON.stringify(email),
        defaultHeaderConfig
      )
      dispatch(authActions.success(res.data))
    } catch ({ response }) {
      response && setAlert(response.data, 'danger')
      dispatch(authActions.removeToken())
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
      dispatch(authActions.success(res.data))
      setAlert('Email send', 'success')
    } catch ({ response }) {
      response && setAlert(response.data, 'danger')
      dispatch(authActions.removeToken())
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
        dispatch(authActions.success(res.data))
        setAlert('Password Changed', 'success')
      } catch ({ response }) {
        response && setAlert(response.data, 'danger')
        dispatch(authActions.removeToken())
      }
    }

// Log user out
export const logout = () => async (dispatch: Dispatch) => {
  dispatch(authActions.removeToken())
  dispatch(profileActions.clearProfile())
}
