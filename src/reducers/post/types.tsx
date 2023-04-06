import { type UserType } from '../profile/types'

export interface RecomendProps {
  _id: string
  user: string
}

export interface CommentProps {
  date: Date | string
  _id: string
  text: string
  name: string
  avatar: string
  user: UserType
}

export interface PostProps {
  _id: string
  text: string
  name: string
  avatar: string
  user: string
  comments: CommentProps[]
  likes: RecomendProps[]
  date: Date | string
  loading: boolean
}

export interface InitialStateProps {
  posts?: PostProps[]
  post?: PostProps
}
