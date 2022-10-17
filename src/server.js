const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.static(path.resolve("public")));
app.use(express.static(path.resolve("music")));

const server = app.listen(port, () => {
  console.log(`server running on localhost: ${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("index.html"));
});
