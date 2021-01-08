const { default: axios } = require("axios");
const express = require("express");
const passport = require("passport");

let router = express.Router();

// router.get("/", 
//   passport.authenticate("linkedin", {
//     // scope: ["r_liteprofile"]
//     // state: "SOME STATE"
//   }, function (res) {
//     console.log("I PASSED FIRST AUTH LINK");
//   })
// );

// router.get("/callback", 
//   passport.authenticate("linkedin", {
//     successRedirect: "/linkedin/success",
//     failureRedirect: "/linkedin/failure"
//   })
// );

router.get("/success", (req, res) => {
  // res.send("<h1>I successfully connected to LinkedIn")
  res.json({success: "SUCCESS"})
});

router.get("/failure", (req, res) => {
  res.send("<h1>I failed :(");
});

router.get("/me", (req, res) => {
  axios
    .get("https://api.linkedin.com/v2/me")
    .then((data) => {
      res.json(data)
    })
    .catch(err => console.log(err));

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