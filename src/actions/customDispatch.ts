import { type Dispatch } from 'redux'

export default (params: any) => (dispatch: Dispatch) => dispatch(params)
