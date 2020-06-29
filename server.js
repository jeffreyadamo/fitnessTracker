// Requiring necessary npm packages
const express = require("express");
var router = require("express").Router();
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Setup model
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// API Routes imported:
app.use(require("./routes/api-routes.js"));
require("./routes/html-routes.js")(app);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// })

// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/stats.html"));
// })

// app.get("/exercise", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/exercise.html"));
// })


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
