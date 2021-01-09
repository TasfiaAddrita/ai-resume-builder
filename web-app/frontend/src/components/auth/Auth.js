import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Done from "./Done";
import Dashboard from "../dashboard/Dashboard";

class Auth extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/done" component={Done} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}
export default Auth;


// SOURCE: https://www.simplecode.io/blog/build-admin-template-semantic-ui-react-part-2-login-signup/