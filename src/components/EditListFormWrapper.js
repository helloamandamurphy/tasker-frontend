// React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Import from Files
import { updateList, deleteList } from '../actions/myLists'
import { setFormDataForEdit, resetListForm } from '../actions/listForm'
import ListForm from './ListForm'

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

  handleSubmit = (formData) => {
    const { updateList, list, history } = this.props;

    updateList({
      ...formData,
      listId: list.id,
    }, history)
  }

  render() {
    const { history, deleteList, list } = this.props
    const listId = list ? list.id : null
    return <>
        <ListForm editMode handleSubmit={this.handleSubmit} />
        <br/>
        <button class="ui negative button" onClick={()=>deleteList(listId, history)}>Delete List</button>
      </>
  }
};

export default connect(null, { updateList, setFormDataForEdit, resetListForm, deleteList })(EditListFormWrapper);
