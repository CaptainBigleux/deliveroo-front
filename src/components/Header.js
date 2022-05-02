import React from "react";

import logo from "../assets/img/deliveroo-logo.svg";

const Header = ({ darkMode, setdarkMode }) => {
  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <img className="logo" src={logo} alt="deliveroo logo" />
      <>
        <button
          onClick={() => {
            setdarkMode(!darkMode);
          }}
        >
          Dark Mode
        </button>
      </>
    </header>
  );
};

export default Header;
