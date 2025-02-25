import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import Footer from '../../home/widgets/Footer';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) { 
      localStorage.setItem("userToken", "true"); 
      navigate("/profile"); 
    } else {
      alert("Please enter email and password"); 
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="logo-container">
          <img src="/logo_pro.svg" alt="Logo" className="logo" />
        </div>
        <h2 className="title">Login</h2>
        <p className="subtitle">Enter your email and password to login.</p>
        <div className="login-input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <p className="signup-text">
          Don’t have an account? <span className="signup-link" onClick={() => navigate("/register")}>Sign Up</span>
        </p>
        <p className="forgot-password-text">
          <span className="forgot-password-link" onClick={() => navigate("/forgot_password")} >
            Forgot your password?
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
