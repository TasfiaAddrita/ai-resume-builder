import React, { Component } from "react";
import NavSidebar from "./Sidebar";

import "semantic-ui-css/semantic.min.css";

import { Button, Divider, Grid, Header, Icon, Input, Image, Label, Menu } from "semantic-ui-react";

import "./dashboard.css";

import placeholder from "../../images/square-image.png"

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid padded>
          <NavSidebar />
          <Grid.Column computer={14} floated="right" id="content">
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h3">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                <Grid.Column computer={4}>
                  <Image centered size="small" src={placeholder} />
                  <Label basic size="large">Label</Label>
                  <p>Something else</p>
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

// SOURCE: https://github.com/semantic-ui-forest/forest-templates/tree/master/bootstrap/dashboard