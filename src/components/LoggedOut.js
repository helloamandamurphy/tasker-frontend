// React + Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import from Files
import VisitorNavBar from './VisitorNavBar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

//stateless component
const LoggedOut = () => (
  <React.Fragment>
    <VisitorNavBar/>
    <Home/>
    <Switch>
      <Route exact path='home' component={Home}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </React.Fragment>
);

export default LoggedOut;
