// DEPENDENCIES
const express = require("express");
const cors = require("cors");

const projects = require("./projects.json");
const about = require("./about.json");

// APP OBJECT
const app = express();


// MIDDLEWARE
app.use(cors());

//Home Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Projects Route
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

//About Route
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});


//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//SERVER LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));