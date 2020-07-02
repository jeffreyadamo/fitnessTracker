const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type : {
        type: String,
        required: "Please select an exercise type"
    },
    name: {
        type: String,
        required: "Name is Required"
      },
    duration: {
        type: Number,
        required: "Duration is Required"
    },
    distance: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;