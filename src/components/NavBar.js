// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Import from Files
import Login from './Login'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="nav">
      { currentUser ? <strong>Welcome, {currentUser.name}!</strong> : "" }
      { currentUser ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
