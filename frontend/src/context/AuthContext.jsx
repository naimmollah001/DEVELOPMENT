import { createContext, useState, useEffect } from 'react'
import * as authService from '../services/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      setUser({ token })
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const response = await authService.login(email, password)
    setToken(response.accessToken)
    setUser(response.user)
    localStorage.setItem('token', response.accessToken)
    localStorage.setItem('refreshToken', response.refreshToken)
    return response
  }

  const register = async (email, username, password) => {
    return await authService.register(email, username, password)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  }

  return (
    <AuthContext.Provider value={{ user, loading, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
