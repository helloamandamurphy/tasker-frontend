const initialState = []

export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_LISTS":
      return action.lists
    case "ADD_LIST":
      return state.trips.concat(action.trip)
    case "CLEAR_LISTS":
      return initialState
    default:
      return state
  }
}
