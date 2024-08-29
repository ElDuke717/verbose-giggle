const express = require("express");
const router = express.Router();
const db = require("../db");

// Get the five most recent posts with optional limit and sorting
// Route to get the 5 most recent posts for the Home page
router.get('/latest', async (req, res) => {
    try {
        const posts = await db.any(
            'SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 5'
        );
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get all posts for the Post List page
router.get('/', async (req, res) => {
    try {
        const posts = await db.any('SELECT * FROM blog_posts ORDER BY created_at DESC');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await db.oneOrNone("SELECT * FROM blog_posts WHERE id = $1", [
      postId,
    ]);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new post
router.post("/", async (req, res) => {
  const { title, content, author_id } = req.body;
  try {
    const newPost = await db.one(
      "INSERT INTO blog_posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author_id]
    );
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a post by ID
router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedPost = await db.one(
      "UPDATE blog_posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
      [title, content, postId]
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a post by ID
router.delete("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    await db.none("DELETE FROM blog_posts WHERE id = $1", [postId]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
