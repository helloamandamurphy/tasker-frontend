export const createList = (data) => {
// Returning a function, taking the dispatch function as an argument (Thunk)
  return (dispatch) => {
    // Posts form input to API/database
    fetch('http://localhost:3000/api/v1/lists', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    // Takes the saved entry, renders it to JSON,
    // and adds it in the Redux store.
    .then(resp => resp.json())
    .then(list => dispatch({type: 'CREATE_LIST', payload: list}))
  }
}
