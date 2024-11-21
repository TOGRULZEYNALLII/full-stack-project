// src/ToggleSwitch.js
import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    
    <label  className="switch">
      <input onClick={toggleTheme} type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
