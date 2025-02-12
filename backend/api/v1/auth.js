const express = require("express");
const { register } = require("../../services/auth/register");
const { login } = require("../../services/auth/login.js");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;
