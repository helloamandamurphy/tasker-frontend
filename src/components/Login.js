// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

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
    login(loginFormData, history)
  }

// Login Form
  return (
    <form onSubmit={ handleSubmit }>
      <h3>Log In</h3>
      <input placeholder="email" value={loginFormData.email} type="text" name="email" onChange={handleInputChange} />
      <input placeholder= "password" value={loginFormData.password} type="password" name="password" onChange={handleInputChange} />
      <input value="Log In" type="submit"/>

      <div>
        <h4>Sample Login Information</h4>
        <p>Email: thor@asgard.net</p>
        <p>Password: 1234</p>
      </div>
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
