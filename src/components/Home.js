// React + Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//stateless component
const Home = () => (
  <div>
    <h2>Welcome, please <Link to="/signup">sign up</Link> or <Link to="/login">log in</Link>.</h2>
  </div>
);

export default Home;
