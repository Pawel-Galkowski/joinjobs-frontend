import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormState, Form } from '../types'

const initialState: FormState = {
  forms: [],
  form: null,
  loading: false,
  error: null
}

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setForms: (state, action: PayloadAction<Form[]>) => {
      state.forms = action.payload
      state.loading = false
    },
    setForm: (state, action: PayloadAction<Form>) => {
      state.form = action.payload
      state.loading = false
    },
    createForm: (state, action: PayloadAction<Form>) => {
      state.forms.push(action.payload)
      state.form = action.payload
      state.loading = false
    },
    updateForm: (state, action: PayloadAction<Form>) => {
      const index = state.forms.findIndex(f => f._id === action.payload._id)
      if (index !== -1) {
        state.forms[index] = action.payload
      }
      state.form = action.payload
      state.loading = false
    },
    deleteForm: (state, action: PayloadAction<string>) => {
      state.forms = state.forms.filter(f => f._id !== action.payload)
      state.loading = false
    },
    addResponse: (state, action: PayloadAction<{ formId: string; responseId: string }>) => {
      const form = state.forms.find(f => f._id === action.payload.formId)
      if (form && !form.responses.includes(action.payload.responseId)) {
        form.responses.push(action.payload.responseId)
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    clearForm: (state) => {
      state.form = null
    }
  }
})

export const formActions = formSlice.actions
export default formSlice.reducer
