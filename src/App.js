import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Topics from './Pages/Topics'
import PassObjectViaLink from './Pages/PassObjectViaLink'

function App() {
  let objectToPass = {
    name: "Indranil Basu",
    presentCity: "Bangalore",
    originCity: "Kolakta",
  }

  return (
    <Router>
      <div>
        <h2>Welcome to React Routing POC - using react-router-dom</h2>
        <h5>1. Basic 5 routes ={">"} / , /about, /contact, /topics, /protected-page ={">"} Click on the link and migrate to the 5 different pages by 4 different routes</h5>
        <h5>2. Nested routes ={">"} /topics has nested-routing ={">"} /components , /props-v-state nested inside /topics</h5>
        <h5>3. Redirect route ={">"} /protected-page redirects to /contact</h5>
        <h5>4. Programatic routing [history.push] ={">"} Programatically route from /topic/... to /about</h5>
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/topics"}>Topics</Link>
          </li>
          <li>
            <Link to={"/protected-page"}>Protected Page (Redirect)</Link>
          </li>
          <li>
            <Link to={"/pass-object-link"}>Pass object via Link</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/protected-page">
            <Redirect to="/contact" />
          </Route>
          <Route path="/pass-object-link" render={routeProps => <PassObjectViaLink data={objectToPass} {...routeProps} />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
