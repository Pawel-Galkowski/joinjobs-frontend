import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem('token', token)
  } else {
    delete instance.defaults.headers.common['Authorization']
    localStorage.removeItem('token')
  }
}

// Set token from localStorage on app load
const token = localStorage.getItem('token')
if (token) {
  setAuthToken(token)
}

export default instance
