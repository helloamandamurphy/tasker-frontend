// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

// Login Form
  return (
    <form onSubmit={ handleSubmit }>
      <input placeholder="email" value={loginFormData.email} type="text" name="email" onChange={handleInputChange} />
      <input placeholder= "password" value={loginFormData.password} type="text" name="password" onChange={handleInputChange} />
      <input value="Log In" type="submit"/>
    </form>
  )
}

// Reading states from Redux store
// we can now use these as props
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);