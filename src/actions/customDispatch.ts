import { type Dispatch } from 'redux'

export default (params: any) => async (dispatch: Dispatch) => dispatch(params)
