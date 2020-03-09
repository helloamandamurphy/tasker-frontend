//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Import from Files
// import ListsContainer from './containers/ListsContainer' (not currently using)
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import MainContainer from "./containers/MainContainer.js"

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContainer/>
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
