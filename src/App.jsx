import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
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
import CreateModule from './pages/CreateModule/CreateModule'
import CreateQuiz from './pages/CreateQuiz/CreateQuiz'
import CreateLesson from './pages/CreateLesson/CreateLesson'
import * as moduleService from './services/moduleService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [modules, setModules] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const newModule = async (_module) => {
    console.log(_module)
    const newModule = await moduleService.createModule(_module)
    setModules([...modules, newModule])
    navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
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
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
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
          path="/create-module"
          element={<CreateModule createModule={newModule} />}
        />
        <Route
          path="/create-lesson"
          element={<CreateLesson />}
        />
        <Route
          path="/create-quiz"
          element={<CreateQuiz />}
        />
      </Routes>
    </>
  )
}

export default App
