import { type UserSchema, type CommentSchema } from '.';

interface PostSchema {
  _id: number
  name: string
  avatar: string
  user: UserSchema
  text: string
  likes: string[]
  comments: CommentSchema[]
  date: Date
}

export default PostSchema
