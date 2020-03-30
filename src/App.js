//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'

//Import from Files
// import ListsContainer from './containers/ListsContainer' (not currently using)
import { getCurrentUser } from "./actions/currentUser"
import NavBar from "./components/NavBar"
import MainContainer from "./containers/MainContainer"
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import NewListForm from './components/NewListForm'
import MyLists from './components/MyLists'

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
        <Route exact path='/lists' component={MyLists}/>
        <Route exact path='/lists/new' component={NewListForm}/>
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
