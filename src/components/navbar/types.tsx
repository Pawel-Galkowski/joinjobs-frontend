interface User {
  _id: number
  role: 'admin' | 'user';
}

interface Auth {
  isAuthenticated: boolean
  loading: boolean
  user: User // User
}

interface Profile {
  profile: any // Profile
}

export interface Props {
  auth: Auth
  profile: Profile
  logout: any
}
