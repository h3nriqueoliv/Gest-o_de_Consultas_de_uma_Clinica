import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/Navabar";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {/* Home */}
          <Route exact path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
