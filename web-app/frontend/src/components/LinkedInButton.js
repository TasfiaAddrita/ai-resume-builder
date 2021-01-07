import React, { Component } from "react";

class LinkedInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    };
  }

  callAPI() {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="linkedin-btn">
        <input
          type="image"
          src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
        />
        <h1>{this.state.apiResponse}</h1>
      </div>
    );
  }
}

export default LinkedInButton;