//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Import from Files
import ListsContainer from './containers/ListsContainer'
import Login from './components/Login'
import { getCurrentUser } from "./actions/currentUser.js"


class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
