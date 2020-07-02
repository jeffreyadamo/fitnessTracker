const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: 
  [
      {
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
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
      }
   ]
},
{
    toJSON: {
    virtuals: true
    }
});

workoutsSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce(function(total,exercise){
        return total + exercise.duration
    },0)
})

const Workout = mongoose.model("workouts", workoutsSchema);

module.exports = Workout;
