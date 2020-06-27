const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Personalize this Schema to this app
// ====================================================
// THIS IS BOILERPLATE
// ====================================================
const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

workoutSchema.methods.setFullName = function() {
    this.fullName = `${this.firstName} `+`${this.lastName}`;
  // Alternatively:
  // this.fullName = `${this.firstName} ${this.lastName}`;
  // Alternatively:
  // this.fullName = this.firstName + " " + this.lastName;
  
    return this.fullName;
  }
  
  // lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
  workoutSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
  }
  
// ====================================================
// THIS IS BOILERPLATE
// ====================================================

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
