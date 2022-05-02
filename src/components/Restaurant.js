import React from "react";

const Restaurant = ({ darkMode, title, desc, picture }) => {
  return (
    <div className={`restaurant-info-holder${darkMode ? " dark-mode" : ""}`}>
      <div className="restaurant-main-info">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="restaurant-image-holder">
        <img className="restaurant-image" src={picture} alt="restaurant" />
      </div>
    </div>
  );
};

export default Restaurant;
