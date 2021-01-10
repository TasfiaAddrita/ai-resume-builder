import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Divider, Grid, Header, Icon, Input, Image, Label, Menu } from "semantic-ui-react";
import NavSidebar from "./Sidebar";
import Home from "./Home";
import Content from "./Content";
import Analyze from "./Analyze";
import Settings from "./Settings";
import "semantic-ui-css/semantic.min.css";
import "./dashboard.css";


class Dashboard extends Component {
  render() {
    return (
      <Grid padded>
        <NavSidebar />
      </Grid>
    );
  }
}

export default Dashboard;

// SOURCE: https://github.com/semantic-ui-forest/forest-templates/tree/master/bootstrap/dashboard