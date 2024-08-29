const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");

// Create a new user (Sign-Up)
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await db.oneOrNone(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = await db.one(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users ORDER BY created_at DESC");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;

  try {
    // Hash the new password before updating
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await db.one(
      "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
      [username, email, hashedPassword, userId]
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id = $1", [userId]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
