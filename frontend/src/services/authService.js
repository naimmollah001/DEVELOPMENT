import api from './api'

export const register = async (email, username, password) => {
  const response = await api.post('/auth/register', {
    email,
    username,
    password
  })
  return response.data
}

export const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    email,
    password
  })
  return response.data
}

export const refreshToken = async (refreshToken) => {
  const response = await api.post('/auth/refresh-token', {
    refreshToken
  })
  return response.data
}
