import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';

// Review compose/Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store stores the data globally
// Reducer will return a different version of the store, based on the action
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  < Provider store = { store }>
    < App />
  </ Provider >
  ,
  document.getElementById('root'));
