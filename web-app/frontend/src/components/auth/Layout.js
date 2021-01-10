import React, { Component } from "react";
import { Form, Header, Divider } from "semantic-ui-react";
import "./auth.css";
import LinkedInButton from "../social/LinkedInButton"

class Layout extends Component {
  render() {
    return (
      <div className="auth-main">
        <div class="auth-content">
          <div className="auth-card">
            <LinkedInButton />
            <Divider horizontal>Or</Divider>
            <Header as="h2" color="black" textAlign="center">
              {this.props.header}
            </Header>
            <Form.Group size="large" className="auth-form" autocomplete="off">
              {this.props.children}
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
