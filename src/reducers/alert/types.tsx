export interface Action {
  type: string
  payload: any
}

export interface Props {
  state: any
  action: Action
}
