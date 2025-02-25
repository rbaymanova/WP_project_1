import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../home/widgets/Footer";
import "../styles/verification.css";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div>
      <div className="verification-page">
        <div className="logo-container">
          <img src="/logo_pro.svg" alt="Logo" className="logo" />
        </div>
        <h2 className="title">Enter Verification Code</h2>
        <p className="subtitle">
          We've sent a 6-digit code to your email. Enter it below to verify.
        </p>

        <div className="verification-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="otp-input"
            />
          ))}
        </div>

        <button className="verification-button" onClick={() => navigate("/")}>
          Verify
        </button>
        <p className="resend-text">
          Didn’t get the code? <span className="resend-link">Resend</span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Verification;
