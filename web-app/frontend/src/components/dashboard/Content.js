import React, { Component } from "react";
import NavSidebar from "./NavSidebar";
import {Grid, Form, Header} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./dashboard.css";
import ExperienceModal from "./ExperienceModal";
import ProjectModal from "./ProjectModal";

class Content extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <Grid.Column width={14} floated="right" id="content">
        <Header as="h2">Experience</Header>
        <ExperienceModal />
        <Header as="h2">Projects</Header>
        <ProjectModal />
      </Grid.Column>
    );
  }
}

export default Content;
