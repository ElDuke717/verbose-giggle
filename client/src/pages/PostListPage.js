import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/styles.css";

function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/posts`)
      .then((response) => {
        // Since the API returns the array of posts directly
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
        setPosts([]); // Set posts to an empty array to avoid errors
      });
  }, []);

  return (
    <div>
      <Header />
      <>
        <h1>Blog Posts</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                <p>Author: {post.author_id}</p>
                <p>
                  Submitted:{" "}
                  {new Date(post.created_at)
                    .toLocaleString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })
                    .replace(/\//g, "-")
                    .replace(",", "")}
                </p>
                <p>
                    {post.content.substring(0, 100)}...
                    <Link to={`/posts/${post.id}`}>Read More</Link>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </>
      <Footer />
    </div>
  );
}

export default PostListPage;
