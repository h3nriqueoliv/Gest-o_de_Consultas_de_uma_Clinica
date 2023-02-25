import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavaBar";
import Hompg from "./Home/Homepg.js";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <NavBar />
            <Hompg />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
