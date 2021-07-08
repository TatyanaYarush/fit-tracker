const router = require('express').Router();
const mongoose = require("mongoose");
const Workouts = require("../models/workouts.js");

//Get all workouts
router.get('/api/workouts', (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'},
      },
    },
  ])
    .then(workoutData => {
        res.json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//
router.get('/api/workouts/range', (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'},
      },
    },
  ])
    .sort({_id: -1})
    .limit(7)
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

 //Create new workout
router.post('/api/workouts', ({body}, res) => {
  Workouts.create(body)
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Update workouts
router.put('/api/workouts/:id', ({body, params}, res) => {
    Workouts.findByIdAndUpdate(
      {_id: params.id},
      {$push: {exercises: body}},
      {new: true})
      .then(workoutData => {
        res.json(workoutData);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;