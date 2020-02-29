//React + Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Import from Files
import ListsContainer from './containers/ListsContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ListsContainer />
      </div>
    );
  }
}

export default App;
