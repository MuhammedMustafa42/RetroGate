const express = require("express");
const app = express();
const port = 8000;
const db = require("./data/database");
const usersRoutes = require("./routes/users");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(express.static("music"));

app.use(usersRoutes);

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render("500");
});

db.connectToDatabase().then(function () {
  app.listen(port);
});
