const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Підключення до MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Модель Post
const Post = require("./models/Post");

// Маршрут для отримання всіх постів
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Маршрут для додавання нового поста
app.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  // Створення нового поста
  const newPost = new Post({ title, content });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost); // Відправка нового поста у відповідь
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Маршрут для видалення поста за ID
app.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Запуск серверу
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
