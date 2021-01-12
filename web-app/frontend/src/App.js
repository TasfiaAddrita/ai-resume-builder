import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/dashboard/Home";
import Content from "./components/dashboard/Content";
import Analyze from "./components/dashboard/Analyze";
import Settings from "./components/dashboard/Settings";
import Dashboard from "./components/dashboard/Dashboard"

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Landing} />
      //     <Route exact path="/login" component={Login} />
      //     <Route exact path="/signup" component={Signup} />

      //     <Redirect path="/login" to="/login" />
      //     <Redirect path="/signup" to="/signup" />

      //     <Route exact path="/dashboard" component={Home} />
      //     <Route exact path="/content" component={Content} />
      //     <Route exact path="/analyze" component={Analyze} />
      //     <Dashboard />
      //   </Switch>
      // </Router>
      <div className="App">
        {/* <Landing /> */}
        <Dashboard />
      </div>
    );
  }
}
export default App;
