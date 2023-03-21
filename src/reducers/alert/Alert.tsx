// import { FC } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../../actions/types'
// import { Props } from './types';'

interface Props {
  state: any
  action: any
}

export const Alert: React.FC<Props> = ({ state, action }) => {
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
