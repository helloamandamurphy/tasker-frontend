// synchronous action creators
export const updateNewListForm = (name, value) => {
  return {
    type: "UPDATE_NEW_LIST_FORM",
    formData: { name, value }
  }
}

export const resetNewListForm = () => {
  return {
    type: "RESET_NEW_LIST_FORM"
  }
}

// asynchronous action creators
