// Auth Types
export interface User {
  _id: string
  name: string
  email: string
  avatar: string
  role: 'user' | 'admin'
  confirmed: boolean
  date: string
}

export interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  token: string | null
  isAdmin: boolean
  user: User | null
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
}

export interface LoginPayload {
  email: string
  password: string
}

// Profile Types
export interface Education {
  _id: string
  school: string
  degree: string
  fieldofstudy: string
  from: string
  to: string
  current: boolean
  description: string
}

export interface Experience {
  _id: string
  title: string
  company: string
  location: string
  from: string
  to: string
  current: boolean
  description: string
}

export interface Profile {
  _id: string
  user: string
  company: string
  website: string
  location: string
  status: string
  skills: string[]
  bio: string
  githubusername: string
  experience: Experience[]
  education: Education[]
  social: {
    youtube: string
    twitter: string
    facebook: string
    linkedin: string
    instagram: string
  }
  date: string
}

export interface ProfileState {
  profiles: Profile[]
  profile: Profile | null
  loading: boolean
  error: string | null
}

// Post Types
export interface Comment {
  _id: string
  text: string
  name: string
  avatar: string
  user: string
  likes: string[]
  date: string
}

export interface Post {
  _id: string
  text: string
  name: string
  avatar: string
  user: string
  likes: string[]
  comments: Comment[]
  date: string
}

export interface PostState {
  posts: Post[]
  post: Post | null
  loading: boolean
  error: string | null
}

// Form Types
export interface FormField {
  _id: string
  label: string
  type: string
  required: boolean
  options?: string[]
}

export interface FormQuestion {
  _id: string
  question: string
  type: string
  required: boolean
  options?: string[]
}

export interface Form {
  _id: string
  name: string
  description: string
  company: string
  fields: FormField[] | FormQuestion[]
  responses: string[]
  user: string
  date: string
}

export interface FormState {
  forms: Form[]
  form: Form | null
  loading: boolean
  error: string | null
}

// Alert Types
export interface Alert {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export interface AlertState {
  alerts: Alert[]
}
