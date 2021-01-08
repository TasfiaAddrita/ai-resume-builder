const { default: axios } = require("axios");
const express = require("express");
const passport = require("passport");

let router = express.Router();

router.get("/success", (req, res) => {
  // res.send("<h1>I successfully connected to LinkedIn")
  res.json({ res: "auth successful!" });
})

router.get("/failure", (req, res) => {
  res.send("<h1>I failed :(");
});

router.get("/me", (req, res) => {
  // res.send("<h1>I successfully connected to LinkedIn");
  console.log(req.session.token);

  const config = {
    headers: { Authorization: `Bearer ${req.session.token}` },
  };

  axios
    .get("https://api.linkedin.com/v2/me", config)
    .then((response) => {
      console.log(response.data);
      res.json({res: "successfully got linkedin profile!"})
    })
    .catch(err => {
      console.log("ERROR", err)
      res.json({ res: "failed, did not get linkedin profile :(" });
    });

})

module.exports = router;



// axios
//   .get("https://www.linkedin.com/oauth/v2/authorization", {
//     params: {
//       response_type: "code",
//       client_id: LINKEDIN_CLIENT_ID,
//       redirect_uri: LINKEDIN_REDIRECT_URI,
//       scope: LINKEDIN_SCOPE,
//     },
//   })
//   .then(function (res) {
//     // console.log(res);
//     console.log("Hello world, I work");
//   });