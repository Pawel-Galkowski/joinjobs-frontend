import {
  FORM_ERROR,
  GET_FORMS,
  GET_FORM,
  ADD_FORM,
  ADD_COMPANY,
  GET_COMPANIES,
  ADD_RESPONSE,
  ADD_QUESTIONS,
  GET_QUESTIONS,
  GET_RESPONSES,
  REMOVE_FORM,
  GET_COMPANY_FORMS,
  GET_COMPANY,
  REMOVE_COMPANY,
  GET_RESPONSE,
  REMOVE_RESPONSE
} from '../../actions/types'
import { type FormRedcuerProps } from './types'

const initialState: FormRedcuerProps = {
  forms: [],
  form: {},
  error: {}
}

const formReducer = (state: FormRedcuerProps = initialState, action: any) => {
  const { payload, type } = action

  switch (type) {
    case FORM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case GET_COMPANIES:
    case GET_COMPANY_FORMS:
    case GET_RESPONSES:
    case GET_QUESTIONS:
    case GET_COMPANY:
    case GET_FORMS:
    case GET_RESPONSE:
      return {
        ...state,
        forms: payload,
        loading: false
      }
    case GET_FORM:
      return {
        ...state,
        form: payload,
        loading: false
      }
    case ADD_COMPANY:
    case ADD_FORM:
      return {
        ...state,
        forms: [...state.forms, payload],
        loading: false
      }
    case ADD_RESPONSE:
    case ADD_QUESTIONS:
      return {
        ...state,
        form: { ...state.form, comments: payload },
        loading: false
      }
    case REMOVE_FORM:
    case REMOVE_RESPONSE:
    case REMOVE_COMPANY:
      return {
        ...state,
        forms: state.forms.filter((form: any) => form._id !== payload),
        loading: false
      }
    default:
      return state
  }
}

export default formReducer
