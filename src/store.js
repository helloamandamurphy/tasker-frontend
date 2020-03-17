// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

// Import from Files
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import myLists from './reducers/myLists';
import signupForm from './reducers/signupForm';

// Combining Reducers
const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  signupForm,
  myLists
})

//Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating the Store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
