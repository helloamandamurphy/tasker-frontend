// React + Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// functional / stateless component
const ListCard = ({ list }) => {
  return (
    list ?
      <div>
        <h3>{list.name}</h3>
        <p>{list.end_time}</p>
        <Link to={`/lists/${list.id}/edit`}>Edit this List</Link>
      </div> :
    <p>Sorry! We couldn't find your list.</p>
  )
}

export default ListCard
