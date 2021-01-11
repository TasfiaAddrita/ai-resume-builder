import React from "react";
import { Grid, Image, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Content from "./Content";
import Analyze from "./Analyze";
import Settings from "./Settings";
import Landing from "../landing/Landing";
import "./dashboard.css";
import logo from "../../images/logo-white-title.png";

const NavSidebar = () => (
  <Router>
    <Grid.Column width={2} id="sidebar">
      <Image centered size="tiny" src={logo} />
      <Menu vertical borderless fluid text icon="labeled">
        <Menu.Item as={Link} to="/dashboard">
          <Icon name="home" size="large" />
          Home
        </Menu.Item>

        <Menu.Item as={Link} to="/content">
          <Icon name="edit" size="large" />
          Content
        </Menu.Item>
        <Menu.Item as={Link} to="/analyze">
          <Icon name="check" size="large" />
          Analyze
        </Menu.Item>
        <Menu.Item as={Link} to="/export">
          <Icon name="external alternate" size="large" />
          Export
        </Menu.Item>
        <Menu.Item as={Link} to="/settings">
          <Icon name="setting" size="large" />
          Settings
        </Menu.Item>
        <Menu.Item as={Link} to="/logout">
          <Icon name="sign-out" size="large" />
          Logout
        </Menu.Item>
      </Menu>
    </Grid.Column>
    <Route exact path="/dashboard" component={Home} />
    <Route exact path="/content" component={Content} />
    <Route exact path="/analyze" component={Analyze} />
  </Router>
);

export default NavSidebar;
