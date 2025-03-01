import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../home/widgets/Footer";
import "../../profile/style/profile_page.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const defaultProfilePic = "/default-profile.jpg";

  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const handleDeletePicture = () => {
    setProfilePic(defaultProfilePic);
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <h2>My Profile</h2>
          <img
            src={profilePic}
            alt="Profile"
            className="profile-picture"
            onError={(e) => (e.target.src = "/default-profile.jpg")}
          />
          <div className="button-group">
            <label className="custom-button change-button">
              Change picture
              <input type="file" onChange={handleImageChange} hidden />
            </label>
            <button
              className="custom-button delete-button"
              onClick={handleDeletePicture}
            >
              Delete picture
            </button>
          </div>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="save-button" onClick={() => navigate("/")}>
              Save
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
