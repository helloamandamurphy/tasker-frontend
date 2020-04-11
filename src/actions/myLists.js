// Import from Files
import { resetNewListForm } from './newListForm'

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
        console.log(response)
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
        dispatch(resetNewListForm())
        history.push(`/lists/${resp.id}`)
      }
    })
    .catch(console.log)
  }
}
