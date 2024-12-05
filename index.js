const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/rout", (req, res) => {
  res.send("routing");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
