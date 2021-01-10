import React, { Component } from "react";
import { Form, Grid, Header, Icon, List } from "semantic-ui-react";
import "./landing.css";
import Auth from "../auth/Auth";
import logo from "../../images/logo-white-title.png"

class Landing extends Component {
  render() {
    return (
      <div>
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
                      <List.Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Totam, praesentium at porro perspiciatis officiis
                        sint fuga assumenda fugit odit rem animi reprehenderit
                        quisquam magni. Delectus, aspernatur. Quisquam
                        consectetur obcaecati sequi.
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a">
                    <Icon name="right triangle" />
                    <List.Content>
                      <List.Header>Feature 2</List.Header>
                      <List.Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Totam, praesentium at porro perspiciatis officiis
                        sint fuga assumenda fugit odit rem animi reprehenderit
                        quisquam magni. Delectus, aspernatur. Quisquam
                        consectetur obcaecati sequi.
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a">
                    <Icon name="right triangle" />
                    <List.Content>
                      <List.Header>Feature 3</List.Header>
                      <List.Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Totam, praesentium at porro perspiciatis officiis
                        sint fuga assumenda fugit odit rem animi reprehenderit
                        quisquam magni. Delectus, aspernatur. Quisquam
                        consectetur obcaecati sequi.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Grid.Column>

            <Grid.Column width={6}>
              <div className="right-side">
                <Auth />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Landing;