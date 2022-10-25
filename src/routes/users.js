const express = require("express");
const path = require("path");
const db = require("../data/database");
const router = express.Router();
const bcrypt = require("bcrypt");
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

router.get("/", function (_req, res) {
  res.render(path.resolve("index.ejs"), { user: "user" });
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
  res.render(path.resolve("index.ejs"), { user: "user" });
});

//route for authentication (sign in)
router.post("/auth", async function (req, res) {
  const input = {
    email: req.body.emailin,
    password: req.body.passwordin,
  };

  console.log(input);

  const user = await db
    .getDb()
    .collection("users")
    .findOne({ email: input.email });

  if (user) {
    if (bcrypt.compareSync(input.password + pepper, user.password)) {
      console.log(user);
      res.render(path.resolve("index.ejs"), { user: user });
    }
  }
  return null;
});

module.exports = router;
