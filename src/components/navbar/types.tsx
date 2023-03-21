interface User {
  _id: number
  role: 'admin' | 'user'
}

interface Auth {
  isAuthenticated: boolean
  loading: boolean
  user: User
}

interface Profile {
  profile: any
}

export interface Props {
  auth: Auth
  profile: Profile
  logout: any
}
