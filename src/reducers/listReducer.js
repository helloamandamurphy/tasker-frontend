export default function listReducer(state = {lists: []}, action) {
  switch (action.type) {
    case 'FETCH_LISTS':
      return {lists: action.payload}
    case 'CREATE_LIST':
      return {...state, lists: [...state.lists, action.payload]}
      // Seems to be working, but double check once new lists save.
    default:
      return state
  }
}
