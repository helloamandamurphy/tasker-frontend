export default function listReducer(state = {lists: []}, action) {
  switch (action.type) {
    case 'FETCH_LISTS':
      return {lists: action.payload}
    default:
      return state
  }
}
