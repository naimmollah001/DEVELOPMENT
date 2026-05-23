import api from './api'

export const getStats = async () => {
  const response = await api.get('/dashboard/stats')
  return response.data
}

export const getUsers = async (page = 1, limit = 10) => {
  const response = await api.get('/dashboard/users', {
    params: { page, limit }
  })
  return response.data
}

export const getUser = async (userId) => {
  const response = await api.get(`/dashboard/users/${userId}`)
  return response.data
}