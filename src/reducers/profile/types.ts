// export interface ConditionalProps {
//   current: boolean
//   to: Date
// }

// type ConditionalProps = {
//   current: true
//   to: undefined
// } | {
//   current: false
//   to: Date
// }

export interface EducationProps {
  _id: string
  school: string
  degree: string
  fieldofstudy: string
  from: string
  description: string
  current: boolean
  to?: string
}

export interface ExperienceProps {
  _id: string
  title: string
  company: string
  location: string
  from: string
  description: string
  current: boolean
  to?: string
}

export interface UserType {
  _id: string
  name: string
  avatar: string
  confirmed: boolean
  date: string | string
  role: 'admin' | 'user'
  email: string
}

export interface SocialMediaProps {
  youtube: string
  twitter: string
  facebook: string
  linkedin: string
  instagram: string
}

export interface ProfileType {
  _id: string
  name: string
  avatar: string
  skills: string[]
  user?: UserType
  company: string
  bio: string
  status: string
  date: Date | string
  profileImg: string
  education: EducationProps[]
  experience: ExperienceProps[]
  website: string
  location: string
  githubusername: string
  socialMedia: SocialMediaProps
}

export interface GithubRepositoryProps {
  html_url: string
  name: string
  description: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
}

export interface ProfileProps {
  profile?: ProfileType
  profiles?: ProfileType[]
  loading: boolean
  repos?: GithubRepositoryProps[]
}
