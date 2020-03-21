// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'

//Import from Files
import ListCard from './ListCard'

const MyLists = props => {
  const listCards = props.lists.length > 0 ?
    props.lists.map(l => <ListCard list={l} key={l.id}/>) : null
  return (
    listCards
  )
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(MyLists);
