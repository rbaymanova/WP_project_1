import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); 
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("userToken"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("userToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      navigate("/profile"); 
    } else {
      navigate("/login"); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
    navigate("/");
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
        <div className="dropdown">
          <button className="login-btn" onClick={handleAuthClick}>
            {isAuthenticated ? (
              <img src="/profile_icon.svg" alt="Profile" className="profile-icon" />
            ) : (
              "Login"
            )}
          </button>
          {isAuthenticated && (
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/my_course">My Courses</Link>
              <a href="/" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
