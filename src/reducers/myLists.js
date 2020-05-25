const initialState = []

export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_LISTS":
      return action.lists
    case "ADD_LIST":
      return state.concat(action.list)
    case "CLEAR_LISTS":
      return initialState
    case "UPDATE_LIST_SUCCESS":
      return state.map(list => list.id === action.list.id ? action.list : list)
    case "DELETE_LIST_SUCCESS":
      return state.filter(list => list.id === action.listId ? false : true)
    default:
      return state
  }
}
