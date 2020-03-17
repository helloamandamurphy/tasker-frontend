// Import from Files
import { resetSignupForm } from "./signupForm.js"
import { resetLoginForm } from "./loginForm.js"
import { getMyLists } from "./myLists.js"

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// REVIEW: async vs. sync and then also dispatch.

// asychronous action creators (requests from backend)
export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(resp => resp.json())
    .then(response => {
      if(response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response))
        dispatch(getMyLists())
        dispatch(resetSignupForm())
      }
    })
    .catch(console.log)
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(resp => resp.json())
    .then(response => {
      if(response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response))
        dispatch(getMyLists())
        dispatch(resetLoginForm())
      }
    })
    .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout',{
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(resp => resp.json())
    .then(response => {
      if(response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response))
        dispatch(getMyLists())
      }
    })
    .catch(console.log)
  }
}
