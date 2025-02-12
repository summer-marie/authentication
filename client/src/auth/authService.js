import axios from 'axios'

export const login = async ({ email, password }) => {
  console.log('authService login', email, password)
  const response = await axios.post(
    `${import.meta.env.VITE_API_SERVER_URL}/auth/login`,
    { email, password }
  )
  console.log('response', response.data)
  return response.data
}

export const status = async (token) => {
  console.log('authService status token', token)
  const response = await axios.get(
    `${import.meta.env.VITE_API_SERVER_URL}/auth/status`,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response.data
}

export const logout = async (token) => {
  console.log('authService logout token', token)
  // Make a logout request to the server (optional but recommended)
  // const response = await axios.post(
  //   `${import.meta.env.VITE_API_SERVER_URL}/auth/logout/${token}`
  // )
  const response = await axios.post(
    `${import.meta.env.VITE_API_SERVER_URL}/auth/logout/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
  localStorage.removeItem('token')

  return response.data
}
