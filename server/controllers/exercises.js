/* B"H
 */
const express = require("express");

const exercises = require("../models/Exercises");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(exercises.getExercises()))
  .get("/:id", (req, res) =>
    res.send(exercises.getExerciseDetails(req.params.id))
  )
  .get("/save", (req, res) =>
    res.send(exercises.addExercise(req.body.exersise))
  )
  .get("/delete", (req, res) =>
    res.send(exercises.deleteExercise(req.params.id))
  );

module.exports = router;
