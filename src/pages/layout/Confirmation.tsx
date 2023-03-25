import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { authorize } from '../../actions/auth'

interface ConfirmationData {
  email: string
  token: string
}

const initialData: ConfirmationData = {
  email: '',
  token: ''
}

function Confirmation () {
  const [formData, setFormData] = useState<ConfirmationData>(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSubmit = () => authorize(formData)

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

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { authorize })(Confirmation)
