interface Auth {
  isAuthenticated: boolean
  loading: boolean
  user: any // User
}

interface Profile {
  profile: any // Profile
}

export type ArrowType = '>' | '<';

export interface Props {
  auth: Auth
  profile: Profile
}
