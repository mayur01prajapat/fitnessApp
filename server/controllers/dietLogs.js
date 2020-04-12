/* B"H
 */
const express = require("express");

const dietLogs = require("../models/DietLogs");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(dietLogs.getDietLogs()))
  .get("/:id", (req, res) =>
    res.send(dietLogs.getDietLogDetails(req.params.id))
  )
  .get("/save", (req, res) =>
    res.send(dietLogs.addDietLogs(req.body.diet))
  )
  .get("/delete", (req, res) =>
    res.send(dietLogs.deleteDietLogs(req.params.id))
  );

module.exports = router;
