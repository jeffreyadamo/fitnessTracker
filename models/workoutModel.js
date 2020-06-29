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
    //      type: Schema.Types.Array,
        //  ref: "exercises"
        type : {
            type: String,
            // trim: true,
            required: "Please select an exercise type"
        },
    
        name: {
            type: String,
            // trim: true,
            required: "Name is Required"
          },
          
        duration: {
            type: Number,
            // trim: true,
            required: "Duration is Required"
        },
        distance: {
            type: Number,
            // trim: true,

        },
        weight: {
            type: Number,
            // trim: true,

        },
    
        reps: {
            type: Number,
            // trim: true,

        },
        sets: {
            type: Number,
            // trim: true,

        }
      }
   ]
},
{toJSON: {
    virtuals: true
}});

workoutsSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce(function(total,exercise){
        return total + exercise.duration
    },0)
})

const Workout = mongoose.model("workouts", workoutsSchema);

module.exports = Workout;
