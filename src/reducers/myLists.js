export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_LISTS":
      return action.lists
    default:
      return state
  }
}
