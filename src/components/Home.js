// React + Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// functional / stateless component
const Home = () => (
  <div>
    <h1>Welcome to Tasker</h1>
    <h2>Organize and allocate your tasks.</h2>
    <p>You don't have to be good at time management. We'll take care of it for you.</p>
    <h4><Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link> to get started.</h4>
    <div class="ui hidden divider"></div>
    <div class="ui divider"></div>
  </div>
);

export default Home;
