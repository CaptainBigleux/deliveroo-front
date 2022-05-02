import React from "react";

const ShoppingCart = ({ darkMode, shoppingCart, setShoppingCart }) => {
  console.log(darkMode);
  return (
    <aside className={`shopping-cart-holder${darkMode ? " dark-mode" : ""}`}>
      <button disabled={shoppingCart ? false : true} className="sc-btn">
        Valider votre panier
      </button>
      <div>Votre panier est vide</div>
    </aside>
  );
};

export default ShoppingCart;
