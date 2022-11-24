import Home from './pages/homepage.jsx';
import Header from "./component/header.jsx";
import Detail from './pages/detail.jsx';
import SeeAll from './pages/seeAll.jsx';
import Login from './pages/login.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/seeAll/:id">
            <SeeAll />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
