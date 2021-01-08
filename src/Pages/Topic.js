import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'

function Topic() {
  let { topicId } = useParams()
  
  let location = useLocation() //Gets the route path
  console.log(location.pathname)

  //let query = useQuery()

  let history = useHistory()
  console.log(history)

  const goBack = (e) => {
    history.goBack()
  }

  return (
    <div>
      <h3>Sub-topic page</h3>
      Requested topic ID: {topicId}

      <button onClick={() => goBack()}>Back</button>
    </div>
  )
}

export default Topic;
