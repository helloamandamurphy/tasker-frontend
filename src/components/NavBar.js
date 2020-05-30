// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// Import from Files
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink style={{padding: "0em, 1em, 1em, 1em"}} to="/lists">My Lists</NavLink>
      <NavLink style={{padding: "1em"}} to="/lists/new">Create a New List</NavLink>
      { loggedIn ? <><span style={{padding: "1em"}} id="loggedin">Logged in as {currentUser.name}</span><Logout/></> : null}
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
