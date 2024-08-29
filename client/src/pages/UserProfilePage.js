import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/styles.css";
import Footer from "../components/Footer";

function UserProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user details
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));

    // Fetch the user's posts
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/posts${id}`, {
        params: { author_id: id },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching user posts:", error));

    // Fetch the comments by the user
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/comments`, {
        params: { author_id: id },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.error("Error fetching user comments:", error));
  }, [id]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <>
      <div className="user-profile-container">
        <h1>{user.username}'s Profile</h1>
        <p>Email: {user.email}</p>

        <h2>Posts by {user.username}</h2>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href={`/posts/${post.id}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts yet.</p>
        )}

        <h2>Comments by {user.username}</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.content}</p>
                <small>
                  On post:{" "}
                  <a href={`/posts/${comment.post_id}`}>
                    Post #{comment.post_id}
                  </a>
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
      <Footer />
    </>
  );
}

export default UserProfilePage;
