// React + Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

// Import from Files
import App from './App';
import store from './store'


ReactDOM.render(
  < Provider store = { store }>
    <Router>
      < App />
    </Router>
  </ Provider >,
  document.getElementById('root'));
