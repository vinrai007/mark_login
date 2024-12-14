import React from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
          <h2>Welcome to </h2>
          <h2><span>Unstop</span></h2>
      <div className="profile-card">
        <img src={user?.image || "/home.png"} alt="Profile" />
        <h3>{user?.username || "Guest"}</h3>
              <p>{user?.email}</p>
        <p>Female</p>
              
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Home;
