import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import Modules from './pages/Modules/Modules'
import Lessons from './pages/Lessons/Lessons'
import Quizzes from './pages/Quizzes/Quizzes'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='AppView'>
      <NavBar user={user} handleLogout={handleLogout} className="sidebar-wrapper"/>
      <div className="AppContent">
      <Routes >
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/modules"
          element={<Modules />}
        />
         <Route
          path="/lessons"
          element={<Lessons />}
        />
        <Route
          path="/quizzes"
          element={<Quizzes />}
        />
         <Route
          path="/landing"
          element={user ? <Landing /> : <Navigate to="/login" />}
          />
      </Routes>
      </div>
    </div>
  )
}

export default App
