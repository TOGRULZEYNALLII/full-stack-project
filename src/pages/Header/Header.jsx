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
import "./style/style.css";

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

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

function Header({ setIsAuthenticated }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Başlangıçta dil butonu görünür, tıklandığında gizlenecek.
  const [isTranslateVisible, setIsTranslateVisible] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    // Temayı değiştirme işlemi
    const headerElement = document.querySelector(".container-header");
    const sidebarElement = document.querySelector(".container-sidebar");
    const logisticsRevenueCards = document.querySelectorAll(".card");
    const yearlyorder = document.querySelector(".left-container-costs-year");
    const carriyngcost = document.querySelector(
      ".right-container-caryingcosts "
    );
    const deliverystatus = document.querySelector(
      ".delivery-status-left-container"
    );
    const salesbylocation = document.querySelector(
      ".right-container-store-location "
    );
    const warhousing = document.querySelector(".warehousing-container-left ");
    const deliverybycountries = document.querySelector(".delivers-country ");
    const cancelledcontainer = document.querySelectorAll(
      ".Cancelled-container "
    );
    const invoicestable = document.querySelector(".invoices-right-container");
    if (isDarkMode) {
      headerElement.classList.remove("dark");
      document.body.classList.remove("darklight");
      sidebarElement.classList.remove("dark");

      yearlyorder.classList.remove("darknoimg");
      deliverystatus.classList.remove("darknoimg");
      carriyngcost.classList.remove("darknoimg");
      salesbylocation.classList.remove("darknoimg");
      warhousing.classList.remove("darknoimg");
      invoicestable.classList.remove("darknoimg");
      deliverybycountries.classList.remove("darknoimg");
      // Tüm .card öğelerinden "darknoimg" sınıfını kaldır
      logisticsRevenueCards.forEach((card) => {
        card.classList.remove("darknoimg");
      });
      cancelledcontainer.forEach((card) => {
        card.classList.remove("darknoimg");
      }
      );
    } else {
      headerElement.classList.add("dark");
      deliverystatus.classList.add("darknoimg");
      document.body.classList.add("darklight");
      carriyngcost.classList.add("darknoimg");
      sidebarElement.classList.add("dark");
      salesbylocation.classList.add("darknoimg");
      yearlyorder.classList.add("darknoimg");
      warhousing.classList.add("darknoimg");
      invoicestable.classList.add("darknoimg");
      deliverybycountries.classList.add("darknoimg");

      // Tüm .card öğelerine "darknoimg" sınıfını ekle
      logisticsRevenueCards.forEach((card) => {
        card.classList.add("darknoimg");
      });
      cancelledcontainer.forEach((card) => {
        card.classList.add("darknoimg");
      });
    }
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  // Dil simgesine tıklanıldığında bu fonksiyon çağrılır ve buton gizlenir.
  const handleLanguageClick = () => {
    setIsTranslateVisible(true);
  };

  return (
    <div className="container-header">
      {/* Search bar */}
      <div className="container-input">
        <img src={VectorIcon} alt="search" />
        <input
          className="input-h"
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
          <img onClick={handleLanguageClick} src={language} alt="language" />
        </button>
        <div id="google_translate_element"></div>
      </div>

      {/* Notifications and Messages */}
      {/* <div className="container-messages">
        <button className="border-mail">
          <img src={bell} alt="bell" />
        </button>
        <button className="border-mail">
          <img src={mail} alt="mail" />
        </button>
      </div> */}

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
