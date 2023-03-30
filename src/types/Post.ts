import { type CommentSchema } from '.'

interface PostSchema {
  _id: string
  name: string
  avatar: string
  user: string
  text: string
  likes: string[]
  comments: CommentSchema[]
  date: Date
}

export default PostSchema
