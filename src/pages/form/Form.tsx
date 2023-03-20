import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../components/spinner/Spinner'
import { getForm, addResponseToForm } from '../../actions/form'

interface User {
  _id: string
}

interface Auth {
  user: User
}

interface Params {
  company: string
  id: number
}

interface Match {
  params: Params
}

interface FormsProps {
  form: any
  loading: any
}

interface Props {
  auth: Auth
  forms: FormsProps
  match: Match
}

const checkType = (name: string) => {
  const afterDot = name.split('.').pop()
  return afterDot ? ['pdf', 'docx'].includes(afterDot?.toLowerCase()) : false
}

const Forms: React.FC<Props> = ({ auth, forms: { form, loading }, match }) => {
  useEffect(() => {
    getForm(match.params.company, match.params.id)
  }, [getForm, match])

  const [answer, setAnswer] = useState<any>('')
  const [fileData, setFileData] = useState<any>('')
  const [formData, setFormData] = useState<any>([])
  const onChange = (e: any) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value })
    setFormData([answer, ...formData])
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    setFormData([answer, ...formData])
    const arr: string[] = Object.values(answer)
    addResponseToForm(match.params.company, match.params.id, arr, fileData)
  }

  const [file, setFile] = useState<any>()

  const handleFile = (elem: any) => {
    if (checkType(elem.target.files[0]?.name)) {
      setFile(elem.target.files[0])
    } else {
      // eslint-disable-next-line no-alert
      alert(
        'Wrong file format. File will not be added!. \nAvailable formats: PDF, DOCX'
      )
    }
  }

  const uploadFile = async () => {
    if (file && checkType(file.name)) {
      const newformData = new FormData()
      newformData.append('file', file)
      newformData.append('user', auth.user._id)
      try {
        const res = await axios.post(
          `/uploads/${match.params.company}/${auth.user._id}`,
          newformData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        setFileData(res.data.filePath)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Not valid file')
    }
  }

  return !!loading || !form ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <Link to={`/api/forms/${match.params.company}`} className='btn btn-light'>
        Back to forms
      </Link>
      <div className='marginTop-2'>
        <h1 className='large text-primary'>Form Questions</h1>
        <form className='form' onSubmit={onSubmit}>
          {form.questions.map((el: any, index: any) => (
            <Fragment key={index}>
              <div className='form-group'>
                <label>{el}</label>
                <input
                  type='text'
                  placeholder={el}
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
              onClick={() => uploadFile}
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

const mapStateToProps = (state: any) => ({
  forms: state.forms,
  auth: state.auth,
})

export default connect(mapStateToProps, {
  getForm,
  addResponseToForm,
})(Forms)

