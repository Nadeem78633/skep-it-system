// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card,CardContent } from "@mui/material";
import {
  authenticate,
  getUserByEmail,
  isAuthenticated,
} from "../utils/auth.js";
import half from "../assets/Images/Wallpaper.png";
import girl from '../assets/Images/girl.png'
import "../assets/Css/login.css";
import blob from '../assets/Images/blob.svg' 
import logo from '../assets/Images/logo.png'


const cardStyles = {
  background: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.5)",
  WebkitBackdropFilter: "blur(4px)", // Prefix for webkit browsers
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated and has chosen to be remembered
    if (isAuthenticated() && localStorage.getItem("rememberMe") === "true") {
      navigate("/home"); // Redirect to home page
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = getUserByEmail(email);

    if (user && user.password === password) {
      authenticate(email, password, () => {
        if (rememberMe) {
          // Save the user's email in local storage if "Remember Me" is checked
          localStorage.setItem("rememberEmail", email);
          localStorage.setItem("rememberMe", "true");
        } else {
          // Clear the remembered email if "Remember Me" is not checked
          localStorage.removeItem("rememberEmail");
          localStorage.setItem("rememberMe", "false");
        }
        navigate("/home"); // Navigate to home page after authentication
      });
    } else {
      console.log("Invalid credentials"); // Show an error message
    }
  };

  return (
    <div className="login-container">
      <div
        className="left-half"
        style={{ backgroundImage: `url(${half})` }}
      ></div>
      <Card className="login-form" style={cardStyles}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <CardContent className="card-content">
          <img src={girl} alt="girl" className="girl-image" />
          <img src={blob} alt="blob" className="blob" />
          <form onSubmit={handleLogin} className="form">
            <h5 className="welcome">Welcome Back...</h5>
            <input
              className="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <input
              className="email"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label className="remember">
              <input
                
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <button className="login-button" type="submit">Login</button>
          </form>
        </CardContent>
      </Card>
      <div
        className="right-half"
        style={{ backgroundImage: `url(${half})` }}
      ></div>
    </div>
  );
};

export default Login;
