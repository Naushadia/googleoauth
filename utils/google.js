var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require('../models');
const User = db.user;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_Key,
      clientSecret: process.env.CLIENT_Secret,
      callbackURL: process.env.Callback,
    },
    async function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      console.log(userProfile);
      const user = await User.findOne({ where: { email:userProfile.emails[0].value } });
      if (!user) {
        const user = await User.create({
          name:userProfile.displayName,
          email:userProfile.emails[0].value,
          accountId:userProfile.id,
          photoURL: userProfile.photos[0].value,
          provider: userProfile.provider
        });
      }
      return done(null, userProfile);
    }
  )
);
