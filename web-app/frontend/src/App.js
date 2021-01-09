import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/landing/Landing"
import Auth from "./components/auth/Auth";

class App extends Component {
  render() {
    return (
      <Landing />
      // <Auth />
    );
  }
}
export default App;
