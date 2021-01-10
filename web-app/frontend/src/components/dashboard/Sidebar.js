import React from "react";
import { Grid, Image, Menu, Icon } from "semantic-ui-react";
import "./dashboard.css";
import logo from "../../images/logo-white-title.png";

const NavSidebar = () => (
  <Grid.Column width={2} id="sidebar">
    <Image centered size="tiny" src={logo} />
    <Menu vertical borderless fluid text icon="labeled">
      <Menu.Item as="a">
        <Icon name="home" size="large" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="edit" size="large" />
        Content
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="check" size="large" />
        Analyze
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="external alternate" size="large" />
        Export
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="setting" size="large" />
        Settings
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="sign-out" size="large" />
        Logout
      </Menu.Item>
    </Menu>
  </Grid.Column>
);

export default NavSidebar;
