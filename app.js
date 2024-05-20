const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", (req, res, next) => {
    res.send("New Server is Active");
  });
  app.use((req, res, next) => {
    res.status(500).json({
      message: "Something went wrong",
    });
  });
  module.exports = {
    app,
  };