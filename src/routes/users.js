const express = require("express");
const path = require("path");
const db = require("../data/database");
const router = express.Router();

router.get("/", function (_req, res) {
  res.sendFile(path.resolve("index.html"));
});

router.post("/users", async function (req, res) {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const result = await db.getDb().collection("users").insertOne(newUser);
  console.log(result);
  console.log(newUser);
  res.redirect("/");
});

module.exports = router;
