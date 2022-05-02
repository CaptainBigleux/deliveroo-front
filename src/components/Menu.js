import React from "react";
import Meals from "./Meals";

const Menu = ({ darkMode, categories }) => {
  return (
    <div className={`menu-holder${darkMode ? " dark-mode" : ""}`}>
      {categories.map((cat, index) => {
        if (cat.meals.length > 0)
          return (
            <div
              key={index}
              className={`meal-category-holder${darkMode ? " dark-mode" : ""}`}
            >
              <h2>{cat.name}</h2>
              <Meals meals={cat.meals} darkMode={darkMode} />
            </div>
          );
        else return null;
      })}
    </div>
  );
};

export default Menu;
