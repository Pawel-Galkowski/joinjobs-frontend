import axios from '../actions/axios'

export default (token: string) => {
  if (token) {
    // Apply to every request
    console.log(token)
    axios.defaults.headers.common['x-auth-token'] = token
    return token
  } else {
    // Delete auth header
    return delete axios.defaults.headers.common['x-auth-token']
  }
}
