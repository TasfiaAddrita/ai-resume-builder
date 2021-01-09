import React, { Component } from "react";
import axios from "axios";

class LinkedInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "derp",
    };
  }

  callAPI() {
    axios("http://localhost:5000/auth/linkedin/signup").then((res) => {
      console.log(res);
      // res.json()
    });
    // .then((res) => {
    //   console.log(res)
    // })
    // .then(res => this.setState({ apiResponse: res.success }))
    // .then(res => console.log(res))
    // .catch(err => err);
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open("http://localhost:5000/auth/linkedin", "_self");
  };

  getProfile() {
    axios("http://localhost:5000/linkedin/me").then((res) => {
      console.log(res);
    });
  }

  componentDidMount() {
    // this.callAPI();
  }

  render() {
    return (
      <div
        className="linkedin-btn"
        // href={"http://localhost:5000/auth/linkedin/signup"}
      >
        <input
          onClick={this._handleSignInClick}
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