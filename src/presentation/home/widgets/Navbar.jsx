import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/profile"); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo_pro.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/team">Our Team</Link></li>
      </ul>
      <div className="nav-actions">
        <img src="/lang.svg" alt="Language" />
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
