//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'

//Import from Files
import { getCurrentUser } from "./actions/currentUser"
import NavBar from "./components/NavBar"
import MyLists from './components/MyLists'
import ListCard from './components/ListCard'
import NewListFormWrapper from './containers/NewListFormWrapper'
import EditListFormWrapper from './containers/EditListFormWrapper'
import LoggedOut from './components/LoggedOut'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, lists } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <LoggedOut/> }
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
      </div>
    );
  }
}

//Only returns whether or not our user is logged in
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    lists: state.myLists
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
