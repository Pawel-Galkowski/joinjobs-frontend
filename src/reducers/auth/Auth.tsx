// import { FC } from 'react';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  ACCOUNT_DELETED,
  ACCOUNT_DELETED2,
  ACCOUNT_CONFIRMED,
  RECOVERY_SEND
} from '../../actions/types'
// import { Props } from './types';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  loading: true,
  user: {}
}

const authReducer = (state = initialState, action: any) => {
  const { payload, type } = action
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case RECOVERY_SEND:
    case ACCOUNT_CONFIRMED:
      return {
        ...state,
        ...payload,
        loading: false
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    case ACCOUNT_DELETED2:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    default:
      return state
  }
}

export default authReducer
