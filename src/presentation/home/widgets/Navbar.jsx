import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsAuthenticated(!!userToken);
  }, []);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate("/profile"); 
    } else {
      navigate("/login"); 
    }
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
        <button className="login-btn" onClick={handleAuthClick}>
          {isAuthenticated ? (
            <img src="/profile_icon.svg" alt="Profile" className="profile-icon" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
