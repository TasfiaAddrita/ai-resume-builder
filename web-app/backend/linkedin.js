const axios = require("axios");
require("dotenv").config();

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const LINKEDIN_REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI;
// https://stackoverflow.com/questions/49944387/how-to-correctly-use-axios-params-with-arrays for multiple scopes
const LINKEDIN_SCOPE = "r_liteprofile";

axios.get("https://www.linkedin.com/oauth/v2/authorization", {
    params: {
      response_type: "code",
      client_id: LINKEDIN_CLIENT_ID,
      redirect_uri: LINKEDIN_REDIRECT_URI,
      scope: LINKEDIN_SCOPE
    },
  })
  .then(function (response) {
    console.log(response);
  })

