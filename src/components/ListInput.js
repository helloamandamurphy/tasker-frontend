//React + Dependencies
import React from 'react'
import { connect } from 'react-redux'

//Import from Files
import {createList} from '../actions/createList'

// Class Component--EXPLAIN WHY
class ListInput extends React.Component {
  //Setting Local State
  state = { name: "", start_time: "13:00", end_time: "17:00"}
  // Need to figure out how to set start_time to current time.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createList(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>List Name</label>
          <input id="listName" type="text" placeholder="List Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
          <label>End Time</label>
          <input id="end_time" type="time" name="end_time" value={this.state.end_time} onChange={this.handleChange}/><br></br>
          <input type="submit" value="Create List"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createList})(ListInput);
