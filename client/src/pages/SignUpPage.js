import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/styles.css";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Send the sign-up data to the backend
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/users/signup`, {
        username,
        email,
        password,
      })
      .then((response) => {
        setSuccess("Sign-up successful!");
        setError("");
        // Clear the form or redirect the user to a login page
      })
      .catch((error) => {
        setError("Sign-up failed. Please try again.");
        setSuccess("");
      });
  };

  return (
    <div>
      <Header />
      <div className="sign-up-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
