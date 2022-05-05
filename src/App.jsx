import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
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
import './App.css'
import * as moduleService from './services/moduleService.js'
import CreateModule from './pages/CreateModule/CreateModule'
import CreateQuiz from './pages/CreateQuiz/CreateQuiz'
import CreateLesson from './pages/CreateLesson/CreateLesson'
import * as quizService from './services/quizService'
import * as lessonService from './services/lessonService'
import './App.css'
import Modules from './components/Modules/Modules';
import AdminPage from './pages/AdminPage/AdminPage';


const App = () => {
  const [modules, setModules] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [lessons, setLessons] = useState([])
  const [quizzes, setQuizzes] = useState([])
  const [moduleSelect, setModuleSelect] = useState("")
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSelect = (e) => {
    if (moduleSelect === "") {
      setModuleSelect(e.target.id)
    } else {
      setModuleSelect("")
    }
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
    const newLesson = await lessonService.createLesson(lesson)
    setLessons([...lessons, newLesson])
    navigate('/')
  }

  const newQuiz = async (quiz) => {
    const newQuiz = await quizService.createQuiz(quiz)
    setQuizzes([...quizzes, newQuiz])
    navigate('/')
  }

  useEffect(() => {
    moduleService.getAll()
      .then(allModules => setModules(allModules))
  }, [])

  useEffect(() => {
    if (moduleSelect !== "") {
      lessonService.getModuleLessons(moduleSelect)
        .then(module => setLessons([module.lessons]))
      console.log(lessons)
    } else {
      setLessons([])
    }
  }, [moduleSelect])

  return (
    <div className='AppView'>
      <NavBar user={user} handleLogout={handleLogout} className="sidebar-wrapper"/>
      <Routes>
        <Route path="/" element={user ? <Landing user={user}/> : <Navigate to="/login" />} />
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
          path="/adminPage"
          element={<AdminPage createModule={newModule} createLesson={newLesson} createQuiz={newQuiz} />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/modules"
          element={<ModulesView
            modules={modules}
            handleSelect={handleSelect}
            moduleSelect={moduleSelect}
            lessons={lessons}
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
          element={<CreateLesson createLesson={newLesson} />}
        />
        <Route
          path="/create-quiz"
          element={<CreateQuiz createQuiz={newQuiz} />} />
        <Route
          path="/landing"
          element={user ? <Landing /> : <Navigate to="/login" />}
        />
      </Routes>
      </div>
  )
}

export default App
