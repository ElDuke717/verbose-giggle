const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db"); // Import the db object

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Allow CORS from your local development environment
app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your React app's local address
  })
);
app.use(bodyParser.json());

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);

// Basic route for testing
app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

// Test the database connection
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await db.any("SELECT NOW()");
    console.log(result); // Log the result to see if the query works
    res.json({ success: true, result });
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
