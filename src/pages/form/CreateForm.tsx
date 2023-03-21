import { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCompanyForm } from '../../actions/form'

interface Params {
  company: string
  id: number
}

interface Match {
  params: Params
}

interface Props {
  match?: Match
}

const CreateForm: React.FC<Props> = ({ match }) => {
  const [formData, setFormData] = useState<any>([])
  const [newData, setData] = useState<any>({
    title: '',
    skills: '',
    body: '',
    question: ''
  })

  const onSubmit = () => {
    if (formData < 1) {
      // eslint-disable-next-line no-alert
      alert('You need to add at least one question')
    } else {
      match &&
        addCompanyForm(match.params.company, {
          questions: formData,
          body: {
            title: newData.title,
            skills: newData.skills,
            body: newData.body
          }
        })
    }
  }

  const removeInput = (ind: any) => {
    formData.splice(ind, 1)
    setFormData([...formData])
  }

  const { title, skills, body, question } = newData

  const onChange = (e: any) => {
    setData({
      ...newData,
      [e.target.name]: e.target.value
    })
  }

  const generateFormObject = () => {
    if (newData !== '') {
      setFormData([newData.question, ...formData])
      setData({
        title: newData.title,
        skills: newData.skills,
        body: newData.body,
        question: ''
      })
    }
  }

  return (
    <div className='paddingSection'>
      <Link
        to={`/api/forms/${match ? match.params.company : ''}`}
        className='btn btn-light'
      >
        Back to forms
      </Link>
      <div className='marginTop-2'>
        <h1>Create new form</h1>
        <div className='form-box'>
          <form className='form' id='createCompanyForm'>
            <div className='boxed'>
              <h2>Post informations</h2>
              <label>Title of post</label>
              <input
                type='text'
                className='inputMargin'
                name='title'
                value={title}
                placeholder='Title of post'
                onChange={onChange}
                required
              />
              <label>Skills (write with &quot;,&quot;)</label>
              <input
                type='text'
                className='inputMargin'
                name='skills'
                value={skills}
                placeholder='Skills'
                onChange={onChange}
                required
              />
              <label>Your full informations about recrutiment</label>
              <textarea
                className='inputMargin'
                name='body'
                value={body}
                placeholder='Your full informations about recrutiment'
                onChange={onChange}
                required
              />
            </div>
            <div className='boxed'>
              <label>Recruitment questions</label>
              <input
                type='text'
                name='question'
                value={question}
                placeholder='Write new question'
                onChange={onChange}
              />
              <button
                type='button'
                className='btn btn-success'
                onClick={generateFormObject}
              >
                Add question
              </button>
            </div>
            <div id='Added questions'>
              {formData?.map((el: any, index: string) => (
                <Fragment key={index}>
                  <div id={`inp${index}`} className='boxed-box'>
                    <input
                      type='text'
                      className='inputBase'
                      value={el}
                      placeholder={el.question}
                      name={index}
                      readOnly
                    />
                    <button
                      type='button'
                      className='trashBase'
                      onClick={() => {
                        removeInput(index)
                      }}
                    >
                      <i className='fas fa-trash' />
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className='paddingSection'>
              <input
                type='submit'
                className='btn btn-dark margin-button'
                value='Submit'
                onClick={onSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { addCompanyForm })(CreateForm)
