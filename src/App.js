//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'

//Import from Files
// import ListsContainer from './containers/ListsContainer' (not currently using)
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from "./components/NavBar.js"
import MainContainer from "./containers/MainContainer.js"
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import MyLists from './components/MyLists.js'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' render={()=> loggedIn ? <MyLists/> : <Home/> }/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/my-lists' component={MyLists}/>
      </div>
    );
  }
}

//Only returns whether or not our user is logged in
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
