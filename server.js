// Requiring necessary npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Setup model
const Workout = require("./models/workoutModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });

// Routes

app.use(require("./routes/api.js"));

// CREATE

// READ

// UDPATE

// POST
// app.post("/submit", ({body}, res) => {
//     console.log(body);
//     // Create a new user using req.body
//     const user = new User(body);
//     // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
//     // You must create these methods in the model.
//     user.setFullName();
//     user.lastUpdatedDate();
  
//     User.create(user)
//       .then(dbUser => {
//         // If saved successfully, send the the new User document to the client
//         res.json(dbUser);
//       })
//       .catch(err => {
//         // If an error occurs, send the error to the client
//         res.json(err);
//       });
//   });
  


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
