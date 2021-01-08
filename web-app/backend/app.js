require("dotenv").config();
// const path = require("path");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const session = require("express-session");

const routes = require("./routes");

const app = express();
const port = 5000;

/**
 * -----------------------------------------------------------------------------
 * Setup
 * -----------------------------------------------------------------------------
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// app.set("view engine", "handlebars");
app.use(session({ secret: "ssshhhhh" }));


/**
 * -----------------------------------------------------------------------------
 * Passport Code
 * -----------------------------------------------------------------------------
 */

const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

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
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_REDIRECT_URI,
      scope: ["r_emailaddress", "r_liteprofile"],
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      req.session.token = accessToken;

      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      process.nextTick(function () {
        return done(null, profile);
      })
    }
  )
);

/**
 * -----------------------------------------------------------------------------
 * Cross Origin Requests
 * -----------------------------------------------------------------------------
 */

const cors = require("cors");

app.use(cors());

// app.all("/*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.options("*", cors());

/**
 * -----------------------------------------------------------------------------
 * Routes
 * -----------------------------------------------------------------------------
 */

app.use("/auth", routes.auth);
app.use("/linkedin", routes.linkedin);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});