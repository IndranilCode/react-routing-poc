import React from "react"
import { Link, Route, Switch, useRouteMatch, useHistory } from "react-router-dom"
import Topic from './Topic'

const Topics = (props) => {
  let match = useRouteMatch()
  console.log(match.url)

  let history = useHistory()

  const goBack = (e) => {
    history.goBack()
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>

      <button onClick={() => goBack()}>Back</button>
    </div>
  )
}

export default Topics
