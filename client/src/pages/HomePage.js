import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/styles.css"; // Optional: If you want to add custom styles
import NebulousReasonImage from "../components/NebulousReasonImage";

function HomePage() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Fetch the latest 5 posts
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/posts/latest`)
      .then((response) => {
        setLatestPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching latest posts:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <Header />
      <NebulousReasonImage />
      <main className="home-main">
        <section className="home-section">
          <h2>Latest Posts</h2>
          {latestPosts.length > 0 ? (
            <ul>
              {latestPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading latest posts...</p>
          )}
          <Link to="/posts" className="home-link">
            View All Blog Posts
          </Link>
        </section>
        <section className="home-section">
          <h2>About Us</h2>
          <p>Learn more about the author and the purpose of this blog.</p>
          <Link to="/about" className="home-link">
            Learn More
          </Link>
        </section>
        <section className="home-section">
          <h2>Join the Community</h2>
          <p>Sign up to comment on posts and join the discussion.</p>
          <Link to="/signup" className="home-link">
            Sign Up
          </Link>
          
        </section>
        <Link to="/users" className="home-link">
            User Directory
          </Link>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
