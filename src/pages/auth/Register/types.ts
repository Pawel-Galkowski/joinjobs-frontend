export type RoleType = 'user' | 'admin'

export interface RegisterData {
  name: string
  email: string
  password: string
  password2: string
  role: RoleType
}
