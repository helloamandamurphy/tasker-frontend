//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Import from Files
import ListsContainer from './containers/ListsContainer'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { getCurrentUser } from "./actions/currentUser.js"


class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Logout/> : <Login/>
      // <div className="App">
      // </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
