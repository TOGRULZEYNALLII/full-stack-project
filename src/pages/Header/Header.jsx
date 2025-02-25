import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VectorIcon from "../Header/assets/search.svg";
import light from "../Header/assets/Vector.svg";
import dark from "../Header/assets/dark.svg";
import language from "../Header/assets/Language.svg";
import bell from "../Header/assets/Bell.svg";
import mail from "../Header/assets/mail.svg";
import avatar from "../Header/assets/avatar.svg";
import settings from "../Header/assets/Settings.svg";
import ellipse from "../Header/assets/Ellipse.svg";
import "./style/style.css"
// LogoutFromPage Component
const LogoutFromPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:8088/api/AccountPage/Logout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        localStorage.removeItem("token");
        setIsAuthenticated(false); // Oturum kapatılınca authenticated durumu false yapılır
        navigate("/login"); // Login sayfasına yönlendirilir
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

function Header({ setIsAuthenticated }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTranslateVisible, setIsTranslateVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.querySelector(".container-header").classList.remove("dark");
      document.body.classList.remove("darklight");
    } else {
      document.querySelector(".container-header").classList.add("dark");
      document.body.classList.add("darklight");
    }
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container-header">
      {/* Search bar */}
      <div className="container-input">
        <img src={VectorIcon} alt="search" />
        <input
          className="input"
          type="text"
          placeholder="Search here..."
          name="searchinput"
          id="searchinput"
        />
      </div>

      {/* Light/Dark Mode Toggle */}
      <div className="container-button">
        <img src={light} alt="light" />
        <div>
          <label className="switch">
            <input
              onClick={toggleTheme}
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <img src={dark} alt="dark" />
      </div>

      {/* Google Translate Button */}
      <div className="google-translate-container">
        <button
          className="border-mail"
          style={{ display: isTranslateVisible ? "none" : "block" }}>
          <img
            onClick={() => {
              handleTranslate();
              closeTranslate();
            }}
            src={language}
            alt="language"
          />
        </button>
      </div>

      {/* Notifications and Messages */}
      <div className="container-messages">
        <button className="border-mail">
          <img src={bell} alt="bell" />
        </button>
        <button className="border-mail">
          <img src={mail} alt="mail" />
        </button>
      </div>

      {/* User Info and Logout */}
      <div className="container-personal">
        <div className="container-personal-text">
          <div>
            <p className="patrica">Patrica Peters</p>
          </div>
          <div className="online">
            <img src={ellipse} alt="green-daire" />
            <p>Online</p>
            <LogoutFromPage setIsAuthenticated={setIsAuthenticated} />
          </div>
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <button className="button-settings">
            <img className="settings" src={settings} alt="settings" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
