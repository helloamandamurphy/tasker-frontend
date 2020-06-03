// React + Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// functional / stateless component
const ListCard = ({ list }) => {
  return (
    list ?
      <div>
        <h2>{list.name}</h2>
        <p>Your deadline for this list is <b>{moment(list.end_time).add(4, 'hours').format('LT')}</b></p>
        <h3>Tasks</h3>
        <i>In future development, this is where I would add the ability to create, read, update, and delete tasks for each list, along with a timer for each task.</i>
        <ul>
          <li>Respond to email, 30 minutes.</li>
          <li>Work on code, 180 minutes.</li>
          <li>Write a blog post on React, 60 minutes.</li>
        </ul>
        <Link to={`/lists/${list.id}/edit`}>Edit this List</Link>
        <div class="ui hidden divider"></div>
        <div class="ui center aligned container">
          <button class="ui huge green button">Start Working</button>
        </div>
        <div class="ui hidden divider"></div>
        <i>In future development, this button would start a timer for the first task. When the time was up, the user would receive an alert to move to the next task.</i>
        <div class="ui hidden divider"></div>
      </div> :
    <p>Sorry! We couldn't find your list.</p>
  )
}

export default ListCard
