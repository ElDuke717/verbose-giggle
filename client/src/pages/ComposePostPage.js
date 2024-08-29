import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/styles.css";

function ComposePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }

    // Assume author_id is 1 for now (this should be dynamic based on logged-in user)
    const author_id = 1;

    // Post the new blog entry to the server
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/posts`, {
        title,
        content,
        author_id,
      })
      .then((response) => {
        setSuccess("Post created successfully!");
        setError("");
        // Optionally, redirect to the new post or another page
        navigate(`/posts/${response.data.id}`);
      })
      .catch((error) => {
        setError("Failed to create post. Please try again.");
        setSuccess("");
      });
  };

  return (
    <>
      <Header />
      <div className="compose-post-container">
        <h1>Compose New Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit">Create Post</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ComposePostPage;
