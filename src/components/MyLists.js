// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// functional / stateless component
const MyLists = props => {
  const listCards = props.lists.length > 0 ?
    props.lists.map(l => (<p key={l.id}><Link to={`/lists/${l.id}`}>{l.name}</Link></p>)) : null
  return listCards
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(MyLists);
