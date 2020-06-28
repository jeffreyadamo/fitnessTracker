const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
         type: Schema.Types.Array,
        //  ref: "exercises"
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
            type: Number,
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
      }
   ]
});

const Workout = mongoose.model("workouts", workoutsSchema);

module.exports = Workout;
