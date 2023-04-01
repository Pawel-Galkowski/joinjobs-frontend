import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { authorize } from '../../actions/auth'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface ConfirmationData {
  email: string
  token: string
}

const initialData: ConfirmationData = {
  email: '',
  token: ''
}

const Confirmation: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<ConfirmationData>(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSubmit = useCallback(() => {
    dispatch(authorize(formData))
  }, [])

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' Sign Into Your Account'}
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={onchange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.token}
            onChange={onchange}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        {'Don&apos;t have an account? '}
        <Link to="/register">Sign Up</Link>
      </p>
    </>
  )
}

export default Confirmation
