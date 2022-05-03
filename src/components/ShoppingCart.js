import React from "react";

import { useState, useEffect } from "react";

const ShoppingCart = ({ darkMode, shoppingCart, setShoppingCart }) => {
  //shopping cart [
  // {title: title, price: price, quantity: 1, id:id},
  // ]

  const [total, setTotal] = useState(0);
  const deliveryFee = 2.5;
  const getTotal = () => {
    let price = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      price += Number(shoppingCart[i].price);
    }
    setTotal(parseFloat((price += 2.5)).toFixed(2));
  };

  useEffect(() => {
    getTotal();
  }, [shoppingCart]);

  return (
    <aside className={`shopping-cart-holder${darkMode ? " dark-mode" : ""}`}>
      <button
        disabled={shoppingCart.length !== 0 ? false : true}
        className="sc-btn"
      >
        Valider votre panier
      </button>
      {shoppingCart.length !== 0 ? (
        shoppingCart.map((item, index) => {
          const { title, price, quantity } = item;
          return (
            <div key={index} className="top-half-cart-holder">
              <div className="cart-items-holder">
                <span>
                  <button>-</button>
                  <span>{quantity}</span>
                  <button>+</button>
                </span>
                <span>{title}</span>
                <span>{parseFloat(price).toFixed(2)}€</span>
              </div>
            </div>
          );
        })
      ) : (
        <div>Votre panier est vide</div>
      )}
      {shoppingCart.length !== 0 ? (
        <div className="bottom-half-cart-holder">
          <div className="cart-price-display">
            <p>
              <span>Sous-total</span>
              <span>{parseFloat(total - deliveryFee).toFixed(2)}€</span>
            </p>
            <p>
              <span>Frais de livraison</span>
              <span>{parseFloat(deliveryFee).toFixed(2)}€</span>
            </p>
          </div>
          <div className="cart-total-price">
            <span>Total</span>
            <span>{parseFloat(total + 2.5).toFixed(2)}€</span>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default ShoppingCart;
