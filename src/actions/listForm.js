// synchronous action creators
export const updateListForm = (name, value) => {
  return {
    type: "UPDATE_LIST_FORM",
    formData: { name, value }
  }
}

export const resetListForm = () => {
  return {
    type: "RESET_NEW_LIST_FORM"
  }
}

export const setFormDataForEdit = list => {
  const listFormData = {
    name: list.name,
    endTime: list.end_time
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    listFormData
  }
}
