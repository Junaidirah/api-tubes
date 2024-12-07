const express = require("express");
const app = express();
const cors = require("cors");

const { route } = require("./routes/routes.js");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api", route);

module.exports = app;
