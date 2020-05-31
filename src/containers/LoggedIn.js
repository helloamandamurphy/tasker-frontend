// React + Dependencies
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

// Import from Files
import NavBar from "../components/NavBar"
import MyLists from '../components/MyLists'
import ListCard from '../components/ListCard'
import NewListFormWrapper from '../components/NewListFormWrapper'
import EditListFormWrapper from '../components/EditListFormWrapper'
import Clock from '../components/Clock'

// functional / stateless component
const LoggedIn = ({ lists, loggedIn }) => {
  return (
    <React.Fragment>
      <NavBar/>
      <Clock/>
      <Switch>
        <Route exact path='/lists' component={MyLists}/>
        <Route exact path='/lists/new' component={NewListFormWrapper}/>
        <Route exact path='/lists/:id' render={props => {
          const list = lists.find(list => list.id === parseInt(props.match.params.id))
          return <ListCard list={list} {...props}/>
        }}/>
        <Route exact path='/lists/:id/edit' render={props => {
          const list = lists.find(list => list.id === parseInt(props.match.params.id))
          return <EditListFormWrapper list={list} {...props}/>
        }}/>
      </Switch>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    lists: state.myLists
  })
}

export default connect(mapStateToProps)(LoggedIn)
