// Import from Files
import { resetListForm } from './listForm'

//synchronous actions
export const setMyLists = lists => {
  return {
    type: "SET_MY_LISTS",
    lists
  }
}

export const clearLists = () => {
  return {
    type: "CLEAR_LISTS"
  }
}

export const addList = list => {
  return {
    type: "ADD_LIST",
    list
  }
}

export const deleteListSuccess = listId => {
  return {
    type: "DELETE_LIST_SUCCESS",
    listId
  }
}

export const updateListSuccess = list => {
  return {
    type: "UPDATE_LIST_SUCCESS",
    list
  }
}

//async actions
export const getMyLists = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/lists", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyLists(response))
      }
    })
    .catch(console.log)
  }
}

export const createList = (listData, history) => {
  return dispatch => {
    const sendableListData = {
      name: listData.name,
      end_time: listData.endTime,
      user_id: listData.userId
    }
    return fetch("http://localhost:3000/api/v1/lists", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableListData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addList(resp))
        dispatch(resetListForm())
        history.push(`/lists/${resp.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateList = (listData, history) => {
  return dispatch => {
    const sendableListData = {
      name: listData.name,
      end_time: listData.endTime
    }
    return fetch(`http://localhost:3000/api/v1/lists/${listData.listId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableListData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateListSuccess(resp))
        history.push(`/lists/${resp.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteList = (listId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteListSuccess(listId))
        history.push(`/lists`)
      }
    })
    .catch(console.log)
  }
}
