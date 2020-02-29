export function fetchLists() {
  return(dispatch) => {
    // Uses fetch request to get existing data
    fetch('http://localhost:3000/api/v1/lists')
    // Converts the returned data to JSON
    .then(resp => resp.json())
    // Dispatch Action Object to listReducer
    .then(listData => dispatch({
      type: 'FETCH_LISTS',
      payload: listData
    }))
  }
}
