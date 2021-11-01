// Referencing express
const express = require("express");
const path = require("path");
let app = express();

// Log request urls
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// Get all the files from public
app.use(express.static(path.join(__dirname, "../public")));

// Respond to a get request
app.get("/", (req, res) => {
  res.send("Hello from the web server side...");
});

// Turn the server on
app.listen(3000);
