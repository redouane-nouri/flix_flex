const passport = require("passport");

exports.login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "An error occurred during login." });
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: info.message || "Incorrect username or password." });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "An error occurred during login." });
      }

      return res.status(200).json({ message: "Login successful!" });
    });
  })(req, res, next);
};
