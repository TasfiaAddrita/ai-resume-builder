import React, { Component } from "react";
import { Form, Grid, Header, Icon, List } from "semantic-ui-react";
import "./landing.css";
import Auth from "../auth/Auth";
import logo from "../../images/logo-white-title.png"
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      // <Router>
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column width={10}>
              <div className="left-side">
                <img src={logo} width="200px" alt="" />
                {/* <Header as="h2">Welcome</Header> */}
                <List>
                  <List.Item as="a">
                    <Icon name="right triangle" />
                    <List.Content>
                      <List.Header>Feature 1</List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a">
                    <Icon name="right triangle" />
                    <List.Content>
                      <List.Header>Feature 2</List.Header>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a">
                    <Icon name="right triangle" />
                    <List.Content>
                      <List.Header>Feature 3</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Grid.Column>

            {/* <Grid.Column width={6}>
              <div className="right-side">
                <Login />
              </div>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
        // <Route exact path="/login" component={Login} />
        // <Route exact path="/signup" component={Signup} />
      // </Router>
    );
  }
}

export default Landing;