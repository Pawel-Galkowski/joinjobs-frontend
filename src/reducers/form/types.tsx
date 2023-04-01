export interface CompanyDataType {
  company: string
  nip: string
}

export interface FormBodyType {
  title: string
  skills: string
  body: string
}

export interface FormTableType {
  questions: string[]
  _id: string
  creator: string
  body: FormBodyType
  responses: string[]
  date: Date | string
}

export interface FormType {
  admins: string
  _id: string
  company: string
  nip: string
  formTable?: FormTableType[]
}

export interface FormProps {
  forms?: FormType[]
  form?: FormType
  loading: boolean
}
