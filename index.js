const express = require("express");

const app = express();
let port = 8080;
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`port is listening on ${port}`);
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instadata = require("./data.json");
  const data = instadata[username];
  console.log(data);
  res.render("instagram.ejs", { data });
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
