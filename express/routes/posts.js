const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET all the products
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().limit(3); // find() is a method on mongoose
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST
router.get("/:name", async (req, res) => {
  try {
    const post = await Post.find({
      product_name: new RegExp(req.params.name, "i"),
    }).limit(3);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
