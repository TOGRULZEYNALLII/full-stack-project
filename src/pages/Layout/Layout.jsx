// Layout.jsx
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "../Layout/style.css";

function Layout({ setIsAuthenticated }) {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };
    addGoogleTranslateScript();

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,az",
          layout:
            window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="container-main">
      <div className="container-HeOu">
        <Header setIsAuthenticated={setIsAuthenticated} />
        <Outlet />
      </div>
      <div className="container-Sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
