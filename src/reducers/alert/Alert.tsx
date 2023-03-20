// import { FC } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../../actions/types';
// import { Props } from './types';

export const Alert = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload]
    case REMOVE_ALERT:
      return state.filter((alert: any) => alert.id !== payload)
    default:
      return state
  }
}

export default Alert
