import React from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/styles/Home.css";

function Home() {
  const navigate = useNavigate();

  // Logout function: clears user data from localStorage and redirects to login
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login"); // Navigate to the login page
  };

  // Retrieve user data from localStorage (or show default if unavailable)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
      {/* Header Section */}
      <h2>Welcome to</h2>
      <h2>
        <span>Unstop</span>
      </h2>

      {/* Profile Card */}
      <div className="profile-card">
        {/* Display user's profile image or a default placeholder */}
        <img src={user?.image || "/home.png"} alt="Profile" />
        
        {/* Display user's username or default text */}
        <h3>{user?.username || "Guest"}</h3>
        
        {/* Display user's email */}
        <p>{user?.email || "No email available"}</p>

        {/* Hardcoded gender; update if dynamic data is available */}
        <p>Female</p>

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
