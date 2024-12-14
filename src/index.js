import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'; // Import Axios

// Add a global interceptor to suppress Axios errors
axios.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    console.warn("Suppressed Axios error:", error.message); // Log the error silently
    return Promise.resolve(); // Prevent the app from breaking on errors
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
