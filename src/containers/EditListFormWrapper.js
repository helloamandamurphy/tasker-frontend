// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateList } from '../actions/myLists'
import { setFormDataForEdit, resetListForm } from '../actions/listForm'
import ListForm from '../components/ListForm'

// Class Component because we need to use ComponentDidMount to populate our form input
class EditListFormWrapper extends React.Component {
  componentDidMount(){
    this.props.list && this.props.setFormDataForEdit(this.props.list)
  }

  //This will populate the Update Form if accessed from URL
  componentDidUpdate(prevProps){
    this.props.list && !prevProps.list &&
    this.props.setFormDataForEdit(this.props.list)
  }

  //This will clear the form if we leave the page.
  componentWillUnmount(){
    this.props.resetListForm()
  }

  handleSubmit = (formData, userId) => {
    const { updateList, list, history } = this.props;

    updateList({
      ...formData,
      listId: list.id,
      userId
    }, history)
  }

  render() {
    const { history, handleSubmit } = this.props
    return <ListForm editMode handleSubmit={this.handleSubmit} />
  }
};

export default connect(null, { updateList, setFormDataForEdit, resetListForm })(EditListFormWrapper);
