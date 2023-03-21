import { v4 as uuid } from 'uuid'
import { type Dispatch } from 'redux'
import { SET_ALERT, REMOVE_ALERT } from './types'

export default (msg: string, alertType: string, timeout = 5000) =>
  (dispatch: Dispatch) => {
    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
  }
