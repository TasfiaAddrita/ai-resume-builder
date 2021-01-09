const express = require("express");
const passport = require("passport");

let router = express.Router();

// router.get("/linkedin/signup", (req, res) => {
//   res.redirect("/auth/linkedin");
// })

router.get("/linkedin", passport.authenticate("linkedin"));

router.get("/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/linkedin/success",
    failureRedirect: "/linkedin/failure",
  })
);

module.exports = router