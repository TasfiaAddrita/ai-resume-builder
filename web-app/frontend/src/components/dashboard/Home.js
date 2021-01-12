import React, { Component } from "react";
import {Grid, Header, Icon, Card, Segment, Divider, Image} from "semantic-ui-react";
import placeholder from "../../images/resume-placeholder.jpeg";
import "./dashboard.css";
import "semantic-ui-css/semantic.min.css";

class Dashboard extends Component {
  render() {
    return (
      <Grid.Column computer={14} floated="right" id="content">
        <Card.Group itemsPerRow={4}>
          <Card>
            <Image src={placeholder} />
            <Card.Content>
              <Card.Header>Data Science v1</Card.Header>
            </Card.Content>
          </Card>
          {/* <Segment placeholder> */}
          <Card>
            <Card.Content>
              <Header icon>
                <Icon name="plus square outline" />
                <Divider hidden />
                Create a resume
              </Header>
            </Card.Content>
          </Card>
          {/* </Segment> */}
        </Card.Group>
      </Grid.Column>
    );
  }
}

export default Dashboard;
