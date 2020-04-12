/* B"H
 */
const express = require("express");

const exerciseLogs = require("../models/ExerciseLogs");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(exerciseLogs.getExerciseLogs()))
  .get("/:id", (req, res) =>
    res.send(exerciseLogs.getExerciseLogDetails(req.params.id))
  )
  .get("/save", (req, res) =>
    res.send(exerciseLogs.addExerciseLogs(req.body.exersise))
  )
  .get("/delete", (req, res) =>
    res.send(exerciseLogs.deleteExerciseLogs(req.params.id))
  );

module.exports = router;
