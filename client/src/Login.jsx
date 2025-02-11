/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { login } from './auth/authService'

// TODO: Add create new account option
// TODO: Add styling to loading state

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Handle Submit')
    // Validation
    if (loginForm.email === '' || loginForm.password === '') {
      // Show error message/styling
      console.log('Login form error')
    } else {
      // Service call to login
      const checkLogin = await login(loginForm)
      console.log('Login handleSubmit checkLogin', checkLogin)
      
      if (checkLogin.success && checkLogin.token) {
        localStorage.setItem('token', checkLogin.token)
        navigate('/dashboard')
      }
      setIsLoggedIn(true)
    }
  }
  useEffect(() => {
    console.log('useEffect', isLoggedIn)
  }, [isLoggedIn])

  return (
    <>
      <div className="mt-20">
        <h2 className="mt-10 mb-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-rose-950">
          Sign in to your account
        </h2>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-rose-950 text-left"
            >
              Your email
            </label>
            <input
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              type="email"
              id="email"
              className="
              disabled:text-gray-300
               w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rose-950 hover:border-rose-300"
              placeholder="name@flowbite.com"
              autoComplete="email"
              disabled={loading}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-rose-950 text-left"
            >
              Your password
            </label>
            <input
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              id="password"
              name="password"
              type="password"
              className="disabled:text-gray-300 w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rose-950 dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:border-rose-300"
              required
              autoComplete="current-password"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-2 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-80 px-5 py-2.5 text-center dark:bg-rose-950 dark:hover:bg-rose-950 dark:focus:ring-slate-900 
            disabled:cursor-not-allowed
             "
            disabled={loading}
            // disabled={true}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
