import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route exact path="/" component={Landing} />
      //   <Route exact path="/login" component={Landing} />
      //   <Route exact path="/signup" component={Landing} />
      // </Router>
      // <Landing />
      <Dashboard />
    );
  }
}
export default App;
