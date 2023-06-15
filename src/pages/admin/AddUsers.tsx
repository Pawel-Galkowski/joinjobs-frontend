import { useCallback, useState } from 'react'
import setAlert from '../../actions/setAlert'
import { register } from '../../actions/auth'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface Params {
  name: string
  email: string
  password: string
  password2: string
}

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: ''
}

const AddUsers: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<Params>(initialState)
  const [role, setRole] = useState<'user' | 'admin'>('user')

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value === 'admin' ? 'admin' : 'user')
  }

  const { name, email, password, password2 } = formData

  const onSubmit = useCallback(() => {
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      dispatch(register({ name, email, password, role }))
    }
  }, [])

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
        <select name='role' value={role} onChange={onRoleChange} required>
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

export default AddUsers
