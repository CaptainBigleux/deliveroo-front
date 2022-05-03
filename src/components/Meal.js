import React from "react";

const Meal = ({
  title,
  description,
  price,
  picture,
  popular,
  darkMode,
  shoppingCart,
  setShoppingCart,
  id,
}) => {
  const addQuantityToItem = (id) => {
    setShoppingCart((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: Number(item.price) + Number(price),
            }
          : item
      )
    );
  };

  const addNewItemInCart = () => {
    setShoppingCart((prevState) => [
      ...prevState,
      {
        title: title,
        price: price,
        id: id,
        quantity: 1,
      },
    ]);
  };
  return (
    <div
      className={`meal-holder${darkMode ? " dark-mode" : ""}`}
      onClick={() => {
        if (shoppingCart.find((el) => el.id === id)) addQuantityToItem(id);
        else addNewItemInCart();
      }}
    >
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
