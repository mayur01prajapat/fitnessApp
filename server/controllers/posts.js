/* B"H
 */
const express = require("express");

const posts = require("../models/Posts");

const router = express.Router();

router
  .get("/all", (req, res) => res.send(posts.getPosts()))
  .get("/:id", (req, res) =>
    res.send(posts.getExerciseDetails(req.params.id))
  )
  .get("/save", (req, res) =>
    res.send(posts.addPosts(req.body.excersise))
  )
  .get("/delete", (req, res) =>
    res.send(posts.deletePosts(req.params.id))
  );

module.exports = router;
