// React + Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom'

//stateless component
const VisitorNavBar = () => (
  <div class="VisitorNavBar">
    <div class="ui secondary menu">
      <NavLink to="/" class="item"><i class="home big icon"></i></NavLink>
      <div class="right menu">
        <NavLink to="/signup" class="item"><button class="ui button">Sign Up</button></NavLink>
        <NavLink to="/login" class="item"><button class="ui button">Log In</button></NavLink>
      </div>
    </div>
    <div class="ui hidden divider"></div>
  </div>
);

export default VisitorNavBar;
