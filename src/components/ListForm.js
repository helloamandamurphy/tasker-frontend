// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateListForm } from '../actions/listForm';

// functional / stateless component
const ListForm = ({ formData, updateListForm, userId, list, handleSubmit, editMode}) => {
  const { name, endTime } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateListForm(name, value)
  }

  return (
    <div>
      <form class="ui form" onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData, userId)
      }}>

        <h2>{editMode ? "Edit Your List" : "Create a List"}</h2>
        <label class="ui label">List Name</label>
        <input
          type="text"
          placeholder="List Name"
          name="name"
          value={name}
          onChange={handleChange}
          /><br/><br/>

        <label class="ui label">End Time</label>
        <input
        type="time"
        name="endTime"
        value={endTime}
        onChange={handleChange}
        /><br/><br/>

        <input class="ui button" type="submit" value={editMode ? "Edit List" : "Create List"}/>
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
