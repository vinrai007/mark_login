// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./../assets/styles/Login.css";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.username !== "emilys") {
//       setError("Username must be 'emilys'.");
//       return;
//     }
//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       setError("Invalid email format.");
//       return;
//     }
//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters.");
//       return;
//     }

//     // try {
//     //   const response = await axios.post("https://dummyjson.com/auth/login", {
//     //     username: formData.username,
//     //     password: formData.password,
//     //     email: formData.email,
//     //     expiresInMins: 30,
//     //   });
//     //   localStorage.setItem("user", JSON.stringify(response.data));
//     //   navigate("/home");
//     // } catch (error) {
//     //   setError("Login failed. Please try again.");
//       // }

// // try {
// //   // Fire the API call but don't wait for the response
// //   axios.post("https://dummyjson.com/auth/login", {
// //     username: formData.username,
// //     password: formData.password,
// //     email: formData.email,
// //     expiresInMins: 30,
// //   });

// //   // Redirect immediately
// //   navigate("/home");
// // } catch (error) {
// //   // Optionally handle any errors (though the API call won't be awaited)
// //   setError("Login failed. Please try again.");
//       // }
// try {
//   // Make the request, but don't wait for the response
//   axios.post("https://dummyjson.com/auth/login", {
//     username: formData.username,
//     password: formData.password,
//   });

//   // Redirect the user immediately
//   navigate("/home");
// } catch {
//   // Suppress the error and redirect
//   navigate("/home");
// }
      
      
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Welcome to <span>Unstop</span></h2>
//         <button className="social-button">Login with Google</button>
//         <button className="social-button">Login with Facebook</button>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <FaUser />
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="input-group">
//             <FaEnvelope />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="input-group">
//             <FaLock />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           {error && <p className="error">{error}</p>}
//           <div className="options">
//             <label>
//               <input type="checkbox" /> Remember Me
//             </label>
//             <a href="/">Forgot Password?</a>
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p>Don't have an account? <a href="/sign-up">Register</a></p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../assets/styles/Login.css";
import {  FaRegUserCircle , FaEnvelope, FaLock } from "react-icons/fa";
import { MdEmail, MdKey } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaEye,FaEyeSlash  } from "react-icons/fa";




function Login() {
    const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home"); // Redirect to the home page if data exists in localStorage
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username !== "emilys") {
      setError("Username must be 'emilys'.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // try {
    //   const response = await axios.post("https://dummyjson.com/auth/login", {
    //     username: formData.username,
    //     password: formData.password,
    //     email: formData.email,
    //     expiresInMins: 30,
    //   });
    //   localStorage.setItem("user", JSON.stringify(response.data)); // Store user data in localStorage
    //   navigate("/home"); // Redirect to home page
    // } catch (error) {
    //   setError("Login failed. Please try again.");
      // }
// try {
//   // Make the request, but don't wait for the response
//   axios.post("https://dummyjson.com/auth/login", {
//     username: formData.username,
//     password: formData.password,
//   });

//   // Redirect the user immediately
//   navigate("/home");
// } catch {
//   // Suppress the error and redirect
//   navigate("/home");
//       }     
  try {
    // Send login request to API
    axios.post("https://dummyjson.com/auth/login", {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      expiresInMins: 30,
    });

    // Store user credentials and data in localStorage
    const userData = {
      username: formData.username,
      email: formData.email,
      token: formData.token,
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
                  <img src="/login.png" alt="" />

          <div className="login-card">
              <div className="login-heading">
                  <div>
              <h2>Welcome to </h2>
                  <h2><span>Unstop</span></h2>                      
                  </div>

                      <img src="/login.png" alt="" />
    
              </div>

              <div className="social-login">
              <button className="social-button"     style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 48 48">
  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>Login with Google</button>
              <button className="social-button"     style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 48 48">
<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
</svg>Login with Facebook</button>                  
              </div>              
<div class="separator">
  <span>or</span>
</div>

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
            //   placeholder="Username"
              value={formData.username}
              onChange={handleChange}
                      />      </div>                         
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
            //   placeholder="Username"
              value={formData.email}
              onChange={handleChange}
                      />      </div>                         
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
        type={showPassword ? "text" : "password"} // Toggle input type
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

    </div>
                      </div>

      <span
        className="toggle-password-icon"
        onClick={togglePasswordVisibility}
        //                           style={{
        //     color:"black",
        //   position: "absolute",
        //   top: "50%",
        //   right: "10px",
        //   transform: "translateY(-50%)",
        //   cursor: "pointer",
        // }}
      >
        {showPassword ? <FaEyeSlash  /> : <FaEye />}
      </span>                      
</div>

          {/* <div className="input-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div> */}
          {error && <p className="error">{error}</p>}
          <div className="options" >
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot" className="forgot">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
