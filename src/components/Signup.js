// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
  }

// Signup Form
  return (
    <form onSubmit={ handleSubmit }>
      <input placeholder="name" value={signupFormData.name} type="text" name="name" onChange={handleInputChange} />
      <input placeholder="email" value={signupFormData.email} type="text" name="email" onChange={handleInputChange} />
      <input placeholder= "password" value={signupFormData.password} type="text" name="password" onChange={handleInputChange} />
      <input value="Sign Up" type="submit"/>
    </form>
  )
}

// Reading states from Redux store
// we can now use these as props
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
