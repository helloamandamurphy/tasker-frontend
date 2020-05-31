// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { createList } from '../actions/myLists'
import ListForm from '../components/ListForm'

// functional / stateless component
const NewListFormWrapper = ({ history, createList }) => {

  const handleSubmit = (formData, userId) => {
    createList({
      ...formData,
      userId
    }, history)
  }

  return <ListForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createList })(NewListFormWrapper);
