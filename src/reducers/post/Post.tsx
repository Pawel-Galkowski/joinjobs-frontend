// import { FC } from 'react';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../../actions/types'
import type { InitialStateProps, PostProps, CommentProps } from './types'

const initialState: InitialStateProps = {
  post: {
    _id: '',
    text: '',
    name: '',
    avatar: '',
    user: '',
    comments: [],
    likes: [],
    date: '',
    loading: false
  }
}

const postReducer = (state = initialState, action: any) => {
  const { payload, type } = action

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        posts: state.posts?.length ? [...state.posts, payload] : [payload],
        loading: false
      }
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts?.map((post: PostProps) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts?.filter((post: PostProps) => post._id !== payload),
        loading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post?.comments.filter(
            (comment: CommentProps) => comment._id === payload
          )
        },
        loading: false
      }
    default:
      return state
  }
}

export default postReducer
