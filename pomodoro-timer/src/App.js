import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavaBar";
import Hompg from "./Home/Homepg.js";
import Register from './Register/Register';
import Clock from './Clock/Clock.js';

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <NavBar />
            <Hompg />
            <Clock /> 
          </Route>
          {/* Register */}
          <Route path="/register">
          <Register />
          </Route>
          {/* Settings */}
          <Route exact path="/settings">

          </Route>
          {/* report */}
          <Route exact path="/report">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
