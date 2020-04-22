// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//Import from Files
import ListCard from './ListCard'

const MyLists = props => {
  const listCards = props.lists.length > 0 ?
    props.lists.map(l => <><Link to={`/lists/${l.id}`} key={l.id}>{l.name}</Link><br/></>) : null
  return listCards
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(MyLists);
