const express = require("express");
const app = express();
const dotenv = require("dotenv");
const auth_router = require("./api/v1/auth");

dotenv.config();
app.use(express.json());

app.use("/api/v1/auth", auth_router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
