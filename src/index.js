// React + Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// Import from Files
import App from './App';
import store from './store.js'


ReactDOM.render(
  < Provider store = { store }>
    < App />
  </ Provider >,
  document.getElementById('root'));
