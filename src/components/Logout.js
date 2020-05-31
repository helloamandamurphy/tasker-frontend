// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Import from Files
import { logout } from "../actions/currentUser"

// functional / stateless component
const Logout = ({ logout, history }) => {
  return (
    <form class="item" onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <input class="ui button" type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, { logout } )(Logout));
