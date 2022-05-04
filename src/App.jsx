import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import ModulesView from './pages/Modules-View/Modules-View'
import Lessons from './pages/Lessons/Lessons'
import Quizzes from './pages/Quizzes/Quizzes'
import CreateModule from './pages/CreateModule/CreateModule'
import CreateQuiz from './pages/CreateQuiz/CreateQuiz'
import CreateLesson from './pages/CreateLesson/CreateLesson'
import * as moduleService from './services/moduleService'
import * as quizService from './services/quizService'
import * as lessonService from './services/lessonService'

const App = () => {
  const [modules, setModules] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [modules, setModules] = useState([])
  const [lessons, setLessons] = useState([])
  const [quizzes, setQuizzes] = useState([])
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
    const newModule = await moduleService.createModule(_module)
    setModules([...modules, newModule])
    navigate('/')
  }

  const newLesson = async (lesson) => {
    const newLesson = await lessonService.createModule(lesson)
    setLessons([...lessons, newLesson])
    navigate('/')
  }

  const newQuiz = async (quiz) => {
    const newQuiz = await quizService.createModule(quiz)
    setQuizzes([...quizzes, newQuiz])
    navigate('/')
  }
  useEffect(() => {
    moduleService.getAll()
      .then(allModules => setModules(allModules))
  }, [])

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
          element={<ModulesView
            modules={modules}
          />} />
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
          element={<CreateQuiz />} />
        <Route
          path="/landing"
          element={user ? <Landing /> : <Navigate to="/login" />}
        />
      </Routes >
    </>
  )
}

export default App
