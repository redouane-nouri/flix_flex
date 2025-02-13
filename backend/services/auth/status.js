const passport = require("passport");

exports.status = async (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ message: "Authenticated" });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
