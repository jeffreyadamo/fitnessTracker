const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type : {
        type: String,
        trie: true,
        required: "Please select an exercise type"
    },

    name: {
        type: String,
        trim: true,
        required: "Name is Required"
      },
      
    duration: {
        type: Number,
        trim: true,
        required: "Duration is Required"
    },

    weight: {
        type: String,
        trim: true,
        required: "Weight is Required"
    },

    reps: {
        type: Number,
        trim: true,
        required: "Reps are Required"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Sets are Required"
    }
});

const Exercises = mongoose.model("exercises", exercisesSchema);

module.exports = Exercises;