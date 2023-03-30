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
  from: Date
  description: string
  current: boolean
  to?: Date
}

export interface ExperienceProps {
  _id: string
  title: string
  company: string
  location: string
  from: Date
  description: string
  current: boolean
  to?: Date
}

export interface UserType {
  _id: string
  name: string
  avatar: string
  confirmed: boolean
  date: Date | string
  role: 'admin' | 'user'
  email: string
}

export interface ProfileType {
  _id: string
  name: string
  avatar: string
  skills: string[]
  social: object
  user: UserType
  company: string
  bio: string
  status: string
  date: Date
  profileImg: string
  education: EducationProps[]
  experience: ExperienceProps[]
}

export interface ProfileProps {
  profile?: ProfileType
  profiles?: ProfileType[]
  loading?: boolean
}
