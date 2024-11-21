import VectorIcon from "../Header/assets/search.svg";
import "../Header/style/style.css";
import light from "../Header/assets/Vector.svg";
import dark from "../Header/assets/dark.svg";
import language from "../Header/assets/Language.svg";
import bell from "../Header/assets/Bell.svg";
import mail from "../Header/assets/mail.svg";
import avatar from "../Header/assets/avatar.svg";
import settings from "../Header/assets/Settings.svg";
import ellipse from "../Header/assets/Ellipse.svg";
import { useState } from "react";
function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <>
      <div className="container-header ">
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
          <div className="border"></div>
        </div>

        <div className="container-messages">
          <button className="border-mail">
            <img src={language} alt="language" />
          </button>
          <button className="border-mail">
            <img src={bell} alt="bell" />
          </button>
          <button className="border-mail">
            <img src={mail} alt="mail" />
          </button>
          <div className="border"></div>
        </div>
        <div className="container-personal">
          <div className="container-personal-text">
            <div>
              <p className="patrica">Patrica Peters </p>
            </div>
            <div className="online">
              <img src={ellipse} alt="green-daire" />
              <p>Online</p>
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
    </>
  );
}

export default Header;
