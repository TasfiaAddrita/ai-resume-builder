import React, { Component } from "react";
import { Form, Grid, Header } from "semantic-ui-react";
import "./landing.css";
import Auth from "../auth/Auth";

class Landing extends Component {
  render() {
    return (
      // <Auth />
      <Grid centered columns="two">
        <Grid.Row>
          <Grid.Column centered>
            <div className="left-side" stretched centered>
              <Header>HELLO WORLD</Header>
            </div>
          </Grid.Column>
          <Grid.Column stretched>
            <div className="right-side" stretched centered>
              <Auth />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      // </div>
    );
  }
}

export default Landing;