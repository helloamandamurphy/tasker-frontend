// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Import from Files
import { logout } from "../actions/currentUser.js"

const Logout = ({ logout }) => {
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout } )(Logout);
