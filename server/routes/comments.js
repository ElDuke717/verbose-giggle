const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all comments for a post
router.get('/post/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await db.any('SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at DESC', [postId]);
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single comment by ID
router.get('/:id', async (req, res) => {
    const commentId = req.params.id;
    try {
        const comment = await db.oneOrNone('SELECT * FROM comments WHERE id = $1', [commentId]);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new comment
router.post('/', async (req, res) => {
    const { post_id, author_id, content } = req.body;
    try {
        const newComment = await db.one(
            'INSERT INTO comments (post_id, author_id, content) VALUES ($1, $2, $3) RETURNING *',
            [post_id, author_id, content]
        );
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a comment by ID
router.put('/:id', async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    try {
        const updatedComment = await db.one(
            'UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
            [content, commentId]
        );
        res.json(updatedComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a comment by ID
router.delete('/:id', async (req, res) => {
    const commentId = req.params.id;
    try {
        await db.none('DELETE FROM comments WHERE id = $1', [commentId]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;