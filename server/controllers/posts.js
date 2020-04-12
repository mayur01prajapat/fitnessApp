/* B"H
 */
const express = require("express");

const posts = require("../models/Posts");

const router = express.Router();

router
  .get("/posts/all", (req, res) => res.send(posts.getPosts()))
  .get("/posts/:id", (req, res) =>
    res.send(posts.getExerciseDetails(req.params.id))
  )
  .get("/posts/save", (req, res) =>
    res.send(posts.addPosts(req.body.excersise))
  )
  .get("/posts/delete", (req, res) =>
    res.send(posts.deletePosts(req.params.id))
  );

module.exports = router;
