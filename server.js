const express = require("express");
require("dotenv").config();
const passport = require("passport");
const InstaStrategy = require("passport-instagram").Strategy;
const cookieSession = require("cookie-session");
const port = process.env.PORT || 5000

let INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
let INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cookieSession({
    name: "session",
    keys: ["helloworld"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  "instagram",
  new InstaStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      scope: ["user_profile", "user_media"],
      callbackURL: "https://gabis-closet.vercel.app/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

const instaAuth = passport.authenticate("instagram", {
  scope: ["user_profile"],
});

app.get("/auth/instagram", passport.authenticate("instagram"));

app.get("/auth/instagram/callback", passport.authenticate("instagram", { failureRedirect: '/callback' }),
  function (req, res) {
  res.redirect('/')
  });

app.get("")

app.listen(port);
