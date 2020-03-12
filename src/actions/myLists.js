//synchronous actions
export const setMyLists = lists => {
  return {
    type: "SET_MY_LISTS",
    lists
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
