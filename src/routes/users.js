const express = require("express");
const path = require("path");
const db = require("../data/database");
const router = express.Router();
const bcrypt = require("bcrypt");
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

router.get("/", function (_req, res) {
  res.sendFile(path.resolve("index.html"));
});

//route for creating users (sign up)
router.post("/users", async function (req, res) {
  const hash = bcrypt.hashSync(
    req.body.password + pepper,
    parseInt(saltRounds)
  );

  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: hash,
  };
  const result = await db.getDb().collection("users").insertOne(newUser);
  console.log(result);
  console.log(newUser);
  res.redirect("/");
});

//route for authentication (sign in)
router.get("/users", async function (req, res) {
  const input = {
    email: req.body.emailin,
    password: req.body.passwordin,
  };

  console.log(input);

  const user = await db
    .getDb()
    .collection("users")
    .findOne({ email: input.email });

  console.log(user);

  if (user) {
    if (bcrypt.compareSync(input.password + pepper, user.password)) {
      return user;
    }
  }
  return null;
});

module.exports = router;
