import React, { useState } from 'react';
import Navbar from '../../home/widgets/Navbar';
import Footer from '../../home/widgets/Footer';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };

  return (
    <div>
      <Navbar />
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
          Don’t have an account? <span className="signup-link">Sign Up</span>
        </p>
        <p className="forgot-password-text">
          <span className="forgot-password-link">Forgot your password?</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
