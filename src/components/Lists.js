import React from 'react'

//Functional Component because it is using existing information
const Lists = (props) => {
  return (
    //This currently returns this: Jonesin, 2020-02-16T19:06:24.481Z-2020-02-16T19:06:24.481Z
    //So I need to convert these timestamps to something more appropriate
    <div>
      {props.lists.map(list => <li key={list.id}>{list.name}, {list.start_time} - {list.end_time}</li> )}
    </div>
  )
}

export default Lists
