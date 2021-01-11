import React, { Component } from "react";
import NavSidebar from "./NavSidebar";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
} from "semantic-ui-react";

import "./dashboard.css";

import placeholder from "../../images/square-image.png";

class Settings extends Component {
  render() {
    return (
      <Grid.Column computer={14} floated="right" id="content">
        <Grid padded>
          <Grid.Row>
            <Header dividing size="huge" as="h3">
              SETTINGS
            </Header>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column computer={4}>
              <Image centered size="small" src={placeholder} />
              <Label basic size="large">
                Label
              </Label>
              <p>Something else</p>
            </Grid.Column>
          </Grid.Row>
          <Divider section hidden />
        </Grid>
      </Grid.Column>
    );
  }
}

export default Settings;
