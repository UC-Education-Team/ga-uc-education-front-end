import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          id={styles.usernameContainer}
          value={formData.email}
          name="email"
          placeholder="E-Mail"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="password"
          autoComplete="off"
          id={styles.passwordContainer}
          value={formData.pw}
          name="pw"
          placeholder='Password'
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Sign In</button>
      </div>
      <div id={styles.redirectContainer}>
        <p>Don't have an account? 
          <Link to="/signup">Sign Up</Link>
        </p>
        <p>Forgot password?</p>
      </div>
    </form>
  )
}

export default LoginForm
