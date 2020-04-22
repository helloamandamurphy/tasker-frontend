// React + Dependencies
import React from 'react'

const ListCard = ({ list }) => {
  return (
    list ?
      <div>
        <h3>{list.name}</h3>
        <p>{list.end_time}</p>
      </div> :
    <p>Sorry! We couldn't find your list.</p>
  )
}

export default ListCard
