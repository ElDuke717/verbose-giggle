const express = require("express");
const router = express.Router();
const db = require("../db");

// Get posts based on query parameters
router.get('/', async (req, res) => {
    const { author_id, limit } = req.query;
    try {
        let posts;
        
        if (author_id) {
            // If author_id is provided, return all posts by that author
            posts = await db.any(
                `SELECT blog_posts.*, users.username as author_name
                 FROM blog_posts
                 JOIN users ON blog_posts.author_id = users.id
                 WHERE blog_posts.author_id = $1
                 ORDER BY blog_posts.created_at DESC`,
                [author_id]
            );
        } else if (limit) {
            // If limit is provided, return the latest X posts
            posts = await db.any(
                `SELECT blog_posts.*, users.username as author_name
                 FROM blog_posts
                 JOIN users ON blog_posts.author_id = users.id
                 ORDER BY blog_posts.created_at DESC LIMIT $1`,
                [limit]
            );
        } else {
            // Otherwise, return all posts
            posts = await db.any(
                `SELECT blog_posts.*, users.username as author_name
                 FROM blog_posts
                 JOIN users ON blog_posts.author_id = users.id
                 ORDER BY blog_posts.created_at DESC`
            );
        }
        
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
    const postId = req.params.id;
    try {
      const post = await db.oneOrNone(
        `SELECT blog_posts.*, users.username as author_name 
         FROM blog_posts 
         JOIN users ON blog_posts.author_id = users.id 
         WHERE blog_posts.id = $1`, 
        [postId]
      );
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