import axios from './axios'
import setAlert from './setAlert'
import {
  FORM_ERROR,
  GET_COMPANIES,
  GET_FORM,
  GET_COMPANY,
  ADD_COMPANY,
  ADD_FORM,
  ADD_RESPONSE,
  GET_QUESTIONS,
  GET_RESPONSES,
  GET_RESPONSE,
  REMOVE_FORM,
  REMOVE_COMPANY,
  REMOVE_RESPONSE
} from './types'
import dispatch from './customDispatch'

interface CreateCompanyData {
  company: string
  nip: string
}

export const addCompany = async (formData: CreateCompanyData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/forms', formData, config)

    dispatch({
      type: ADD_COMPANY,
      payload: res.data
    })

    setAlert('Company Created', 'success')
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getCompanies = async () => {
  try {
    const res = await axios.get('/api/forms')
    dispatch({
      type: GET_COMPANIES,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const removeCompany = async (company: string) => {
  try {
    const res = await axios.delete(`/api/forms/${company}`)

    dispatch({
      type: REMOVE_COMPANY,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getCompanyForms = async (company: string) => {
  try {
    const res = await axios.get(`/api/forms/${company}`)
    dispatch({
      type: GET_COMPANY,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const addCompanyForm = async (company: string, formData: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/api/forms/${company}`, formData, config)

    dispatch({
      type: ADD_FORM,
      payload: res.data
    })

    setAlert('Form Created', 'success')
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getForm = async (company: string, id: number) => {
  try {
    const res = await axios.get(`/api/forms/${company}/${id}`)
    dispatch({
      type: GET_FORM,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const removeForm = async (company: string, id: number) => {
  try {
    const res = await axios.delete(`/api/forms/${company}/${id}`)

    dispatch({
      type: REMOVE_FORM,
      payload: res.data
    })
    setAlert('Form Removed', 'success')
  } catch (err: any) {
    window.location.reload()
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const addResponseToForm = async (
  company: string,
  id: number,
  formData: string[],
  fileData: JSON
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const responses = { responses: formData, file: fileData }

    const res = await axios.post(
      `/api/forms/res/${company}/${id}`,
      responses,
      config
    )

    dispatch({
      type: ADD_RESPONSE,
      payload: res.data
    })

    setAlert('Response send', 'success')
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getQuestions = async (company: string, id: number) => {
  try {
    const res = await axios.get(`/api/forms/asks/${company}/${id}`)
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getResponses = async (company: string, id: number) => {
  try {
    const responses = await axios.get(`/api/forms/res/${company}/${id}`)
    dispatch({
      type: GET_RESPONSES,
      payload: responses.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const getOneResponse = async (
  company: string,
  id: number,
  res: string
) => {
  try {
    const responses = await axios.get(`/api/forms/res/${company}/${id}/${res}`)
    dispatch({
      type: GET_RESPONSE,
      payload: responses.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}

export const removeResponse = async (
  company: string,
  id: number,
  response: string
) => {
  try {
    const res = await axios.delete(
      `/api/forms/res/${company}/${id}/${response}`
    )

    dispatch({
      type: REMOVE_RESPONSE,
      payload: res.data
    })
  } catch (err: any) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.statusText, status: err.status }
    })
  }
}
