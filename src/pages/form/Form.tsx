import { Fragment, useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from '../../actions/axios'
import Spinner from '../../components/spinner/Spinner'
import { getForm, addResponseToForm } from '../../actions/form'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { type AuthProps } from '../../reducers/auth/types'
import { type FormProps } from '../../reducers/form/types'
import { type AppDispatch } from '../../store'

const checkType = (name: string) => {
  const afterDot = name.split('.').pop()
  return afterDot && ['pdf', 'docx'].includes(afterDot?.toLowerCase())
}

const Forms: React.FC = () => {
  const auth: AuthProps = useAppSelector((state) => state.auth)
  const { form, loading }: FormProps = useAppSelector((state) => state.forms)
  const { company, id } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company || !id) {
    return <Navigate to='/dashboard' />
  }

  if (!!loading || !form) {
    return <Spinner />
  }

  useEffect(() => {
    dispatch(getForm(company, id))
  }, [getForm])

  const [answer, setAnswer] = useState<any>('')
  const [fileData, setFileData] = useState<any>('')
  const [formData, setFormData] = useState<any>([])
  const [file, setFile] = useState<any>()

  const onChange = useCallback((e: any) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value })
    setFormData([answer, ...formData])
  }, [])

  const onSubmit = useCallback(() => {
    setFormData([answer, ...formData])
    const arr: string[] = Object.values(answer)
    dispatch(addResponseToForm(company, id, arr, fileData))
  }, [])

  const handleFile = useCallback(
    (elem: React.ChangeEvent<HTMLInputElement>) => {
      if (checkType(elem.target.files![0]?.name)) {
        setFile(elem.target.files![0])
      } else {
        // eslint-disable-next-line no-alert
        alert(
          'Wrong file format. File will not be added!. \nAvailable formats: PDF, DOCX'
        )
      }
    },
    []
  )

  const uploadFile = useCallback(
    () => async () => {
      if (file && checkType(file.name)) {
        const newformData = new FormData()
        newformData.append('file', file)
        newformData.append('user', auth.user._id)
        try {
          const res = await axios.post(
            `/uploads/${company}/${auth.user._id}`,
            newformData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          setFileData(res?.data.filePath)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('Not valid file')
      }
    },
    []
  )

  return (
    <div className='paddingSection'>
      <Link to={`/api/forms/${company}`} className='btn btn-light'>
        Back to forms
      </Link>
      <div className='marginTop-2'>
        <h1 className='large text-primary'>Form Questions</h1>
        <form className='form' onSubmit={onSubmit}>
          {form.formTable![0].questions.map((question: string, index: any) => (
            <Fragment key={index}>
              <div className='form-group'>
                <label>{question}</label>
                <input
                  type='text'
                  placeholder={question}
                  name={index}
                  required
                  onChange={onChange}
                />
              </div>
            </Fragment>
          ))}
          <div className='custom-file'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={handleFile}
            />
            {fileData ? <span>File added</span> : null}
            <br />
            <button
              type='button'
              className='btn btn-light'
              onClick={uploadFile}
            >
              Upload file
            </button>
          </div>
          <input type='submit' className='btn btn-primary my-1' />
        </form>
      </div>
    </div>
  )
}

export default Forms
