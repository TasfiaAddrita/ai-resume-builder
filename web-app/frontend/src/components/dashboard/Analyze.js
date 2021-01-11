import React, { Component } from "react";
import { Grid, Form, Header, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./dashboard.css";

class Analyze extends Component {
  render() {
    return (
      <Grid.Column computer={14} floated="right" id="content">
        <Header as="h1">Analyze</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field inline>
              <Input fluid label="Job Website" />
            </Form.Field>
            <Form.Button inline color="teal">Submit</Form.Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    );
  }
}

export default Analyze;
