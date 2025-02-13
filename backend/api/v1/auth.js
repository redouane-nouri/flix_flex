const express = require("express");
const { register } = require("../../services/auth/register");
const { login } = require("../../services/auth/login.js");
const { status } = require("../../services/auth/status");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/status", status);

module.exports = router;
