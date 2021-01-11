import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import NavSidebar from "./NavSidebar";
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