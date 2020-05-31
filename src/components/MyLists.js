// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// functional / stateless component
const MyLists = props => {
  const listCards = props.lists.length > 0 ?
    props.lists.map(l => (<Link to={`/lists/${l.id}`} key={l.id}><button class="ui blue huge button" style={{display: "block", margin: "1em"}}>{l.name}</button></Link>)) : null

  return listCards
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(MyLists);
