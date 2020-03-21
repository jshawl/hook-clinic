import React from "react";
import "./App.scss";
import Home from "./Home";
import Appointment from "./Appointment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => (
  <Router>
    <div className="App">
      <h1>
        <Link to="/">http⚡</Link>
      </h1>
      <Switch>
        <Route path="/:id/:ts" component={Appointment} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
