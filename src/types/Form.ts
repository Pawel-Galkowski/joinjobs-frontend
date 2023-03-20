import { type ResponseSchema } from '.';

interface FormSchema {
  _id: string
  company: string
  nip: string
  admins: string[]
  formTable: [
    {
      questions: [null]
      responses: ResponseSchema[]
      body: any
    }
  ]
  loading: boolean
}

export default FormSchema
