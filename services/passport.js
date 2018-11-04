const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const { googleClientID, googleClientSecret } = require("../config/keys");

module.exports = () => {
  const User = mongoose.model("users");

  // passport turns the user model to an identifier and set that as user cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // when receive request, passport turns back cookie identifier to a user model
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  // init google passport strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        // fetch DB for that user, if exists > log in, else > creat new user
        const user = await User.findOne({
          googleID: profile.id
        });
        if (user) {
          // login
          done(null, user);
        } else {
          // create new user
          const newUser = await new User({
            googleID: profile.id
          }).save();
          done(null, newUser);
        }
      }
    )
  );
};
