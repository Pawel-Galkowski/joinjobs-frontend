export interface Action {
  type: string
  payload: any
}

export interface InitialState {
  loading?: boolean
  error?: any
  isAuthenticated?: boolean
  token?: string
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
