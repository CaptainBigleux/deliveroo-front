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

    setTotal(price);
  };

  useEffect(() => {
    getTotal();
  }, [shoppingCart]);

  const handleRemoveItem = (index) => {
    if (shoppingCart[index].quantity === 1) {
      setShoppingCart((prevState) => {
        const newCart = [...prevState];
        newCart.splice(index, 1);
        return newCart;
      });
    } else {
      const individualPrice =
        Number(shoppingCart[index].price) /
        Number(shoppingCart[index].quantity);
      const newPrice =
        Number(shoppingCart[index].price) - Number(individualPrice);

      setShoppingCart((prevState) =>
        prevState.map((item, indexMap) =>
          indexMap === index
            ? {
                ...item,
                quantity: shoppingCart[index].quantity - 1,
                price: newPrice,
              }
            : item
        )
      );
    }
  };

  const handleAddItem = (index) => {
    const individualPrice =
      Number(shoppingCart[index].price) / Number(shoppingCart[index].quantity);

    const newPrice =
      Number(shoppingCart[index].price) + Number(individualPrice);

    setShoppingCart((prevState) =>
      prevState.map((item, indexMap) =>
        indexMap === index
          ? {
              ...item,
              quantity: shoppingCart[index].quantity + 1,
              price: newPrice,
            }
          : item
      )
    );

    // const newArr = [...shoppingCart];
    // console.log(newArr[index]);
    // newArr[index].quantity++;
    // newArr[index].price += individualPrice;
    // setShoppingCart(newArr);
  };

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
                  <button
                    onClick={() => {
                      handleRemoveItem(index);
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => {
                      handleAddItem(index);
                    }}
                  >
                    +
                  </button>
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
              <span>{parseFloat(total).toFixed(2)}€</span>
            </p>
            <p>
              <span>Frais de livraison</span>
              <span>{parseFloat(deliveryFee).toFixed(2)}€</span>
            </p>
          </div>
          <div className="cart-total-price">
            <span>Total</span>
            <span>{parseFloat(total + deliveryFee).toFixed(2)}€</span>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default ShoppingCart;
