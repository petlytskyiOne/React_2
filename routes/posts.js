// routes/posts.js
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Отримати всі пости
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Створити новий пост
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
