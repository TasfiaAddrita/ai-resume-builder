import React, { Component } from "react";
import axios from "axios";

class LinkedInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "derp"
    };
  }

  callAPI() {
    fetch("http://localhost:5000/auth/linkedin")
      .then((res) => {
        console.log(res);
        // res.json()
      })
      // .then(res => this.setState({ apiResponse: res.success }))
      // .then(res => console.log(res))
      // .catch(err => err);
  }

  getProfile() {
    fetch("http://localhost:5000/linkedin/me")
    .then(res => {
      console.log(res)
    })
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
        <button onClick={this.getProfile}>Get profile</button>
        <h1>{this.state.apiResponse}</h1>
      </div>
    );
  }
}

export default LinkedInButton;