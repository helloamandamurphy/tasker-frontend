// React + Dependencies
import React from 'react';
import moment from 'moment';

const Clock = () => {
    return (
      <React.Fragment>
        <div class="ui divider"></div>
        <div>
          <h3 class="ui center aligned header">{moment().format('MMMM Do YYYY')}</h3>
          <h1 class="ui center aligned huge header" style={{"font-size": "10em"}}>{moment().format('h:mm a')}</h1>
        </div>
        <div class="ui divider"></div>
      </React.Fragment>
    );
  }

export default Clock
