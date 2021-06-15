import "./App.css";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Topics from "./Pages/Topics";
import PassObjectViaLink from "./Pages/PassObjectViaLink";
import NonLinkRoutePage from "./Pages/NonLinkRoutePage";
import UrlParamDemoLink from "./Pages/UrlParamDemoLink";
import UrlParamDemo from "./Pages/UrlParamDemo";

function App(props) {
  const history = useHistory();
  let objectToPass = {
    name: "Indranil Basu",
    presentCity: "Kolkata",
    originCity: "Calcutta",
  };

  // const gotoRouteNonLinkPage = (e) => {
  //   console.log(history)
  //   //history.push('/pass-object-non-link')

  //   console.log(props.router)
  //   // props.router.push('/contact');
  // }

  // const gotoUrlParamDemoPage = () => {
  //   console.log('gotoUrlParamDemoPage')
  //   //history.push('/url-param-demo/indranil')
  //   props.router.push('/url-param-demo/indranil')
  // }

  return (
      <div>
        <h2>Welcome to React Routing POC - using react-router-dom</h2>
        <h5>
          1. Basic 5 routes ={">"} / , /about, /contact, /topics,
          /protected-page ={">"} Click on the link and migrate to the 5
          different pages by 4 different routes
        </h5>
        <h5>
          2. Nested routes ={">"} /topics has nested-routing ={">"} /components
          , /props-v-state nested inside /topics
        </h5>
        <h5>3. Redirect route ={">"} /protected-page redirects to /contact</h5>
        <h5>
          4. Programatic routing [history.push] ={">"} Programatically route
          from /topic/... to /about
        </h5>
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
        {/* NOTE: UrlParamDemoLink direct will not work. useHistory() wont work in same place where Routes are mentioned */}
        <UrlParamDemoLink></UrlParamDemoLink>
        <hr />

        {/* <p>
        <h5>Non Link route</h5><button onClick={() => gotoRouteNonLinkPage()}>Route to NonLinkPage</button>
      </p> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/protected-page">
            <Redirect to="/contact" />
          </Route>
          <Route
            path="/pass-object-link"
            render={(routeProps) => (
              <PassObjectViaLink data={objectToPass} {...routeProps} />
            )}
          />
          <Route
            path="/pass-object-non-link"
            render={(routeProps) => (
              <NonLinkRoutePage data={objectToPass} {...routeProps} />
            )}
          />
          {/* <Route path="/pass-object-non-link" render={routeProps => <NonLinkRoutePage {...routeProps} />} /> */}
          <Route path="/url-param-demo/:id" component={UrlParamDemo} />
        </Switch>
      </div>
  );
}

export default App;
