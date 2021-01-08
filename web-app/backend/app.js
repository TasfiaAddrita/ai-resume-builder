console.log("Hello world");

const express = require("express");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const linkedin = require("./linkedin")
require("dotenv").config();

const app = express();
const port = 5000;

// app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const LINKEDIN_REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI;
// https://stackoverflow.com/questions/49944387/how-to-correctly-use-axios-params-with-arrays for multiple scopes
const LINKEDIN_SCOPE = "r_liteprofile";

app.use(cors());

// passport 
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: LINKEDIN_REDIRECT_URI,
      scope: ["r_liteprofile"]
    },
    function (token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  )
);

// routes
app.use("/linkedin", linkedin.controller);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});