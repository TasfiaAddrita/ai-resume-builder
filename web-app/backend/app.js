console.log("Hello world");

const express = require("express");

const app = express();
const port = 5000;

app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.json("Express is connected to React.")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});