/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router'
import { logout } from './auth/authService'

const Navbar = () => {
  let location = useLocation()
  // console.log("location", location)
  const navigate = useNavigate()
  // Redux state
  //  const { isLoggedIn } = useSelector((state) => state.auth)
  const isLoggedIn = !['/login', '/register'].includes(location.pathname)
  // const dispatch = useDispatch();
  const token = localStorage.getItem('token')

  const handleLogout = async () => {
    console.log('handle Logout')
    // Remove from Redux state
    logout(token)
    // Clear from session to redirect w/o having to refresh the page
    localStorage.clear()
    // Redirect to login page
    navigate('/login')
  }

  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            **Website Name
          </span>

          <div className='flex items-center space-x-6 rtl:space-x-reverse'>
            {/* <Link
              to="tel:5541251234"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </Link> */}
            {token ? (
              <span
                onClick={handleLogout}
                className={` ${
                  isLoggedIn
                    ? 'block py-2 px-3 text-gray-900 rounded hover:bg-transparent hover:text-sky-700 md:p-0  dark:text-white dark:hover:text-sky-500 dark:border-gray-700 cursor-pointer letterSpace'
                    : 'hidden'
                }`}
              >
                Logout
              </span>
            ) : (
              <Link
                onClick={() => navigate('/login')}
                to='/login'
                className={` ${
                  isLoggedIn
                    ? 'hidden'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-transparent hover:text-sky-700 md:p-0  dark:text-white dark:hover:text-sky-300 dark:border-gray-700 cursor-pointer letterSpace'
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <nav className='bg-gray-50 dark:bg-sky-700'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <ul className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li>
                <Link
                  to='/'
                  className='text-gray-900 dark:text-white hover:underline'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-900 dark:text-white hover:underline'
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-gray-900 dark:text-white hover:underline'
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
