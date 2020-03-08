// Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

// Import from Files
import listReducer from './reducers/listReducer';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';

// Combining Reducers
const reducer = combineReducers({
  loginForm,
  currentUser,
  listReducer
})

//Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating the Store
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
