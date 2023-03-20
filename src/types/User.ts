interface UserSchema {
  _id: string
  name: string
  email: string
  password: string
  confirmed: boolean
  confirmedKey: string
  recoveryToken: string
  avatar: string
  date: Date
  role: string
}

export default UserSchema

