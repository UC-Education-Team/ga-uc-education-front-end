import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignupForm.css'
import * as authService from '../../services/authService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div className='signUpForm'>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
      <div>
        {/* <label htmlFor="name" className={styles.label}>Name</label> */}
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Username"
          className="inputContainer"
        />
      </div>
      <div>
        {/* <label htmlFor="email" className={styles.label}>Email</label> */}
        <input
          type="text"
          className="inputContainer"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          outline="none"
          
     
        />
      </div>
      <div>
        {/* <label htmlFor="password" className={styles.label}>Password</label> */}
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="inputContainer"
        />
      </div>
      <div>
        {/* <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label> */}
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="inputContainer"
        />
      </div>
      <div >
        <button disabled={isFormInvalid()} className="button">
          Sign Up
        </button>
        <p className='redirectFont'>
            Already have an account? 
            <Link to="/login">Sign In</Link>
          </p>
      </div>
    </form>
    </div>
  )
}

export default SignupForm
