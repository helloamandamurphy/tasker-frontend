// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Counter from './Counter'

// functional / stateless component
const MyLists = props => {
  const listCards = props.lists.length > 0 ?
    props.lists.map(l => (
      <div>
        <Link to={`/lists/${l.id}`} key={l.id}>
        <button class="ui blue huge button" style={{display: "inline", margin: "1em"}}>{l.name}</button>
        </Link>
        <Counter/>
    </div>))
    : <p>You currently have no lists. <Link to="/lists/new">Create a list</Link> to get started!</p>

  return listCards
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(MyLists);
