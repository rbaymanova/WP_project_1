import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/signup.css";
import Footer from "../../home/widgets/Footer";


const SignUp = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    localStorage.setItem("userToken", "fake-jwt-token"); 
    navigate("/profile"); 
  };

  return (
    <div>
        <div className="signin-page">
            <div className="logo-container">
            <img src="/logo_pro.svg" alt="Logo" className="logo" />
            </div>
            <h2 className="title">Sign Up</h2>
            <p className="subtitle">
            Create your account by filling the information below.
            </p>
            <div className="signin-input-container">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="signin-input"/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="signin-input"/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="signin-input"/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="signin-input"/>
            </div>
            <button className="signin-button" onClick={handleSignUp}>
            Sign Up
            </button>
            <p className="login-text"> Already have an account? 
              <span className="login-link" onClick={(e) => {
                e.preventDefault(); 
                navigate("/login");
              }}>
                Login
              </span>
            </p>
        </div>
        <Footer/>
    </div>
  );
};

export default SignUp;
