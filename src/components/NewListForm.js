// React + Dependencies
import React from 'react';
import { connect } from 'react-redux'

// Import from Files
import { updateNewListForm } from '../actions/newListForm';
import { createList } from '../actions/myLists'

const NewListForm = ({ formData, history, updateNewListForm, createList, userId}) => {
  const { name, endTime } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewListForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createList({
      ...formData,
    userId
  }, history)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create a New List</h2>
        <label>List Name</label>
        <input
          type="text"
          placeholder="List Name"
          name="name"
          value={name}
          onChange={handleChange}
          /><br></br>

        <label>End Time</label>
        <input
        type="time"
        name="endTime"
        value={endTime}
        onChange={handleChange}
        /><br></br>

        <input type="submit" value="Create List"/>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.newListForm,
    userId
  }
}

export default connect(mapStateToProps, { updateNewListForm, createList })(NewListForm);
