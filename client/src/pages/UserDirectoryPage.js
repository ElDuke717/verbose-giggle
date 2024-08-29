import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function UserDirectoryPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="user-directory-container">
        <h1>User Directory</h1>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.username}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading users...</p>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate('/')}>Go Home</button>
      <Footer />
    </>
  );
}

export default UserDirectoryPage;
