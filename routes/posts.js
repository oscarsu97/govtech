const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().limit(3); // find() is a method on mongoose
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
