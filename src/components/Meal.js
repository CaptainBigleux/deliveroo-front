import React from "react";

const Meal = ({ title, description, price, picture, popular, darkMode }) => {
  return (
    <div className={`meal-holder${darkMode ? " dark-mode" : ""}`}>
      <div className="meal-info-holder">
        <h3>{title}</h3>
        {description !== "" ? <p>{description}</p> : undefined}
        <div>
          <span>{price}€</span>
          <span>{popular ? "⭐️  Populaire" : ""}</span>
        </div>
      </div>
      <div>
        {picture ? (
          <img className="meal-image" src={picture} alt="menu" />
        ) : undefined}
      </div>
    </div>
  );
};

export default Meal;
