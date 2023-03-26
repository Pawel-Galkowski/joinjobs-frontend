interface User {
  name: string
  avatar: string
}

interface SocialMediaProps {
  youtube?: string
  twitter?: string
  facebook?: string
  linkedin?: string
  instagram?: string
}

export interface ProfileProps {
  status: string
  skills?: string[]
  company: string
  location: string // TODO: change to date
  website: string
  social?: SocialMediaProps
  user: User
  profileImg: string
}
