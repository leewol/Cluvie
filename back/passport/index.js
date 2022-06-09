import passport from "passport";
import local from "./local";
import User from "../models/user";

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    User.findOne({ where: { email } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  local(); // 로컬전략
};
