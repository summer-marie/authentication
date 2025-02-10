// /* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router'
import Home from './Home'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NoMatch from './NoMatch'
import './App.css'

function App() {
  return (
    <>
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
