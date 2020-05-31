//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//Import from Files
import { getCurrentUser } from "./actions/currentUser"
import LoggedOut from './containers/LoggedOut'
import LoggedIn from './containers/LoggedIn'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <LoggedIn/> : <LoggedOut/> }
      </div>
    );
  }
}

//Only returns whether or not our user is logged in
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
