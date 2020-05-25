// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateListForm } from '../actions/listForm';

const ListForm = ({ formData, updateListForm, userId, list, handleSubmit, editMode}) => {
  const { name, endTime } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateListForm(name, value)
  }

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData, userId)
      }}>

        <h2>{editMode ? "Edit Your List" : "Create a List"}</h2>
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

        <input type="submit" value={editMode ? "Edit List" : "Create List"}/>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.listForm,
    userId
  }
}

export default connect(mapStateToProps, { updateListForm })(ListForm);
