import React from "react";
import Navbar from "../../home/widgets/Navbar";
import Footer from "../../home/widgets/Footer";
import { Link } from "react-router-dom";
import "../styles/forgot_password.css"; 

const ForgotPassword = () => {
  return (
    <div>
      <Navbar />
    
      <div className="forgot-password-container">
        <div className="logo-container">

          <img src="/logo_pro.svg" alt="Logo" className="logo" />
        </div>
        <h2 className="title">Forgot your password?</h2>
        <p className="subtitle">
          Enter the email address associated with your account <br />
          and we’ll send you a link to reset it
        </p>
        <div className="input-container">
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <button className="send-button">Send reset link</button>
        <p className="back-to-login">
          <Link to="/login" className="back-link">Back to login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
