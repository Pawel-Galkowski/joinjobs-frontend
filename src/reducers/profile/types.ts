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

export interface User {
  _id: string
  name: string
  avatar: string
}

export interface Profile {
  profile?: {
    _id: string
    name: string
    avatar: string
    skills: string[]
    social: object
    user: User
    company: string
    bio: string
    status: string
    date: Date
    education: EducationProps[]
    experience: ExperienceProps[]
  }
  loading?: boolean
}
