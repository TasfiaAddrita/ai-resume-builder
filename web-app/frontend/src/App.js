import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/dashboard/Home";
import Content from "./components/dashboard/Content";
import Analyze from "./components/dashboard/Analyze";
import Settings from "./components/dashboard/Settings";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Route exact path="/" component={Landing} />
      //   <Route exact path="/login" component={Landing} />
      //   <Route exact path="/signup" component={Landing} />
      // </Router>
      // <Landing />

      // <Router>
        <Dashboard />
        // <Route exact path="/home" component={Home} />
        // <Route exact path="/content" component={Content} />
        // <Route exact path="/analyze" component={Analyze} />
        // <Route exact path="/settings" component={Settings} />
      // </Router>
    );
  }
}
export default App;
