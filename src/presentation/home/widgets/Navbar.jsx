import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile");
  };


  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo_pro.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li > Courses</li>
        <li>Our team</li>
      </ul>
      <div className="nav-actions">
        <img src="/lang.svg" alt="Language" />
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
