import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../assets/styles/Login.css";
import { FaRegUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import { MdEmail, MdKey } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";

function Login() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // React Router hook for navigation
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to store error messages
  const [error, setError] = useState("");

  // Check if user is already logged in and redirect to home
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate username
    if (formData.username !== "emilys") {
        setError( <>
           <IoIosAlert style={{height:"20px", width:"20px", color:"red" }}/> Username must be 'emilys'.
        </>);
      return;
    }


    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError(<>
           <IoIosAlert style={{height:"20px", width:"20px", color:"red" }} /> Invalid Email format.
        </>);
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
        setError(<>
           <IoIosAlert style={{height:"20px", width:"20px", color:"red" }}/> Password must be at least 8 characters.
        </>);
      return;
    }

    try {
      // Send login request to the API
      await axios.post("https://dummyjson.com/auth/login", {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        expiresInMins: 30,
      });

      // Save user data in local storage
      const userData = {
        username: formData.username,
        email: formData.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to home page
      navigate("/home");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <img src="/login.png" alt="Login illustration" />
      <div className="login-card">
        <div className="login-heading">
          <div>
            <h2>Welcome to</h2>
            <h2>
              <span>Unstop</span>
            </h2>
          </div>
          <img src="/login.png" alt="Login logo" />
        </div>

        {/* Social login buttons */}
        <div className="social-login">
          <button className="social-button" style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
           <FcGoogle style={{height:"25px" ,width:"25px", paddingRight:"10px"}} /> 
            Login with Google
          </button>
          <button className="social-button" style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
            <FaFacebookF style={{height:"30px", paddingRight:"10px", color:"blue" }} />
            Login with Facebook
          </button>
        </div>

        <div className="separator">
          <span>or</span>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaRegUserCircle />
            <div>
              <div className="label-section">
                <label>Username</label>
              </div>
              <div className="input-field-section">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="input-group">
            <MdEmail />
            <div>
              <div className="label-section">
                <label>Email</label>
              </div>
              <div className="input-field-section">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="input-group">
            <MdKey />
            <div>
              <div className="label-section">
                <label>Password</label>
              </div>
              <div className="input-field-section" style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Error message */}
          {error && <p className="error">{error}</p>}

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot" className="forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
