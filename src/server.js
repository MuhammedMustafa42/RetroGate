const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const db = require("./data/database");

app.use(express.static("public"));
app.use(express.static("music"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render("500");
});

db.connectToDatabase().then(function () {
  app.listen(port);
});
