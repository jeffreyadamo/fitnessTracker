const router = require("express").Router();
const db = require("../models");

// CREATE
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// READ
// Get last workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({day: -1})
    .limit(1)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// This will need work
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({day: { $gt: new Date().getDate()-7}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// UPDATE

router.put("/api/workouts/:id", (req, res) => {
    
    // db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    db.Workout.update({_id: req.params.id},{$push: {exercises: req.body}})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// DELETE

module.exports = router;