import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./components/auth/Auth"

class App extends Component {
  render() {
    return (
      <Auth />
    );
  }
}
export default App;
