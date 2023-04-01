import { useCallback, useState } from 'react'
import { recoveryPassword } from '../../actions/auth'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

const ReMailer = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<string>('')

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(target.value)
  }

  const onSubmit = useCallback(() => {
    dispatch(recoveryPassword(formData))
  }, [])

  return (
    <div className='center-box'>
      <div className='flex-box'>
        <div className='additionalBG'>&nbsp;</div>
        <div className='user bg-dark'>
          <div className='form-wrap'>
            <div className='tabs-content'>
              <div id='register-tab-content' className='active'>
                <p className='lead'>
                  <i className='fas fa-user' />
                  {' Write your email to recovery account'}
                </p>
                <form
                  className='register-form'
                  onSubmit={onSubmit}
                  method='post'
                >
                  <div className='form-group'>
                    <input
                      className='input'
                      type='email'
                      placeholder='Email Address'
                      name='email'
                      value={formData}
                      onChange={onchange}
                      required
                    />
                  </div>
                  <input
                    type='submit'
                    className='button-change'
                    value='Change Password'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReMailer
