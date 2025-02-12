// /* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NoMatch from './NoMatch'
import Navbar from './Navbar'
import './App.css'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const userState = () => {
  //   if (login === true) {
  //     setIsLoggedIn(true)
  //   } else {
  //     setIsLoggedIn(false)
  //   }
  // }

  // useEffect(() => {
  //   console.log('useEffect', isLoggedIn)
  // }, [isLoggedIn])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
