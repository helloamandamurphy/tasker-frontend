// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

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
    signup(signupFormData, history)
  }

// Signup Form
  return (
    <form class="ui form" onSubmit={ handleSubmit }>
      <h2>Sign Up</h2>
      <div class="equal width fields">
        <input placeholder="name" value={signupFormData.name} type="text" name="name" onChange={handleInputChange} />
        <input placeholder="email" value={signupFormData.email} type="text" name="email" onChange={handleInputChange} />
        <input placeholder= "password" value={signupFormData.password} type="password" name="password" onChange={handleInputChange} />
      </div>
      <input class="ui button" value="Sign Up" type="submit"/>
      <p>Note: If you're testing the app and don't want to create a login, use the sample email and password provided on the login page. </p>
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
