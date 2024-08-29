const express = require("express");
const router = express.Router();
const db = require("../db");

// Get comments based on query parameters
router.get('/', async (req, res) => {
    const { author_id } = req.query; // Extract author_id from query parameters
    try {
        let comments;
        
        if (author_id) {
            // If author_id is provided, return all comments by that author
            comments = await db.any(
                'SELECT * FROM comments WHERE author_id = $1 ORDER BY created_at DESC',
                [author_id]
            );
        } else {
            // Otherwise, return all comments
            comments = await db.any(
                'SELECT * FROM comments ORDER BY created_at DESC'
            );
        }
        
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single comment by ID
router.get("/:id", async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await db.oneOrNone("SELECT * FROM comments WHERE id = $1", [
            commentId,
        ]);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: "Comment not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new comment
router.post("/", async (req, res) => {
    const { post_id, author_id, content } = req.body;
    try {
        const newComment = await db.one(
            "INSERT INTO comments (post_id, author_id, content) VALUES ($1, $2, $3) RETURNING *",
            [post_id, author_id, content]
        );
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get comments by post ID
router.get("/post/:postId", async (req, res) => {
    const postId = req.params.postId;
    try {
      const comments = await db.any(
        `SELECT comments.*, users.username as author_name 
         FROM comments 
         JOIN users ON comments.author_id = users.id 
         WHERE comments.post_id = $1 
         ORDER BY comments.created_at ASC`, 
        [postId]
      );
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;