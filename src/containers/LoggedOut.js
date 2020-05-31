// React + Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import from Files
import VisitorNavBar from '../components/VisitorNavBar'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Login from '../components/Login'

// functional / stateless component / container
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
