interface User {
  _id: string
}

interface CommentSchema {
  _id: string
  name: string
  avatar: string
  user: User
  text: string
}

export default CommentSchema
