import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers'

class App extends React.Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// Access values in store as props
// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

export default connect(null, {fetchUsers})(App);
