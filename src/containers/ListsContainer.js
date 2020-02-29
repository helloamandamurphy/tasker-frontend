//React + Dependencies
import React from 'react'
import {connect} from 'react-redux'

//Import from Files
import {fetchLists} from '../actions/fetchLists'
import Lists from '../components/Lists'
import ListInput from '../components/ListInput'

//Class Container
class ListsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    return(
    <div>
      <ListInput/>
      <Lists lists={this.props.lists}/>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps, {fetchLists})(ListsContainer);
