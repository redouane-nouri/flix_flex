const express = require("express");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const auth_router = require("./api/v1/auth");

dotenv.config();
app.use(cors({ origin: process.env.FRONTEND_BASE_URL, credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: false },
  }),
);

require("./conf/passport.js");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", auth_router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
