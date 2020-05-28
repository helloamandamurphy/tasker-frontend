// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Import from Files
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink to="/lists">My Lists </NavLink>
      <NavLink to="/lists/new">Create a New List</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.name}</p><Logout/></> : null}
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
