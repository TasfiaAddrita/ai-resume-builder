import React, { Component } from "react";

class LinkedInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "derp"
    };
  }

  callAPI() {
    fetch("http://localhost:5000/linkedin")
      .then(res => {
        console.log(res);
        // res.text()
      })
      // .then(res => this.setState({ apiResponse: res}))
      // .catch(err => err);
  }

  componentDidMount() {
    // this.callAPI();
  }

  render() {
    return (
      <div className="linkedin-btn" onClick={this.callAPI}>
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