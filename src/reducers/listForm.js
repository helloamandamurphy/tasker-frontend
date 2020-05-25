const initialState = {
  name: "",
  endTime: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_LIST_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.listFormData
    default:
      return state
  }
}
