import { useState } from 'react'
import { connect } from 'react-redux'
import setAlert from '../../actions/setAlert'
import { register } from '../../actions/auth'

interface Params {
  name: string
  email: string
  password: string
  password2: string
  role: string
}

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  role: ''
}

const AddUsers = () => {
  const [formData, setFormData] = useState<Params>(initialState)

  const onchange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const { name, email, password, password2, role } = formData

  const onSubmit = () =>
    password !== password2
      ? setAlert('Passwords do not match', 'danger')
      : register({
        name,
        email,
        password,
        role
      })

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onchange}
          required
        />
      </div>
      <div className='form-group'>
        <select name='role' value={role} onChange={onchange} required>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
      </div>
      <div className='form-group'>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={onchange}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          minLength={6}
          value={password}
          onChange={onchange}
          required
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          minLength={6}
          value={password2}
          onChange={onchange}
          required
        />
      </div>
      <input type='submit' className='btn btn-primary' value='Register' />
    </form>
  )
}

const mapStateToProps = ({ auth: { isAuthenticated } }: any) => ({
  isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(AddUsers)
