const express = require("express");
const passport = require("passport");

let router = express.Router();

router.get("/linkedin", passport.authenticate("linkedin"));
    // {
    //   scope: ["r_liteprofile"],
    //   state: "SOME STATE"
    // }));

router.get("/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/linkedin/success",
    failureRedirect: "/linkedin/failure",
  })
);

module.exports = router