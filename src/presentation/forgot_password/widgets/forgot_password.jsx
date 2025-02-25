import React from "react";
import Footer from "../../home/widgets/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../styles/forgot_password.css"; 

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div>
    
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
        <button className="send-button" onClick={() => navigate("/verification")}>
          Send reset link
        </button>
        <p className="back-to-login">
          <Link to="/login" className="back-link">Back to login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
