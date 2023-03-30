import { type UserType } from '../profile/types'

export interface AuthProps {
  isAuthenticated: boolean
  loading: boolean
  token: string
  user: UserType
}
