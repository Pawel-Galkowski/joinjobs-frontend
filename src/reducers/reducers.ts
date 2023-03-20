export interface Action {
  type: string
  payload: any
}

export interface InitialState {
  forms?: any
  form?: any
  loading: boolean
  error?: any
  isAuthenticated?: boolean
  token?: any
  user?: any
  posts?: any
  post?: any
  profile?: any
  profiles?: any
  repos?: any
}

export interface CommentType {
  _id: number
  name: string
  text: string
}
