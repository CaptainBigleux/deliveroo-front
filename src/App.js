import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import ShoppingCart from "./components/ShoppingCart";

import axios from "axios";
import "./App.css";

const App = () => {
  const [darkMode, setdarkMode] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-ac.herokuapp.com/"
      );

      setRestaurant(response.data.restaurant);
      setCategories(response.data.categories);
      setisLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={darkMode ? "app-dark" : "app"}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      {!isLoading ? (
        <Restaurant
          title={restaurant.name}
          desc={restaurant.description}
          picture={restaurant.picture}
          darkMode={darkMode}
        />
      ) : null}
      {!isLoading ? (
        <div className={darkMode ? "container dark-mode" : "container"}>
          <div className="menu-shopping-cart">
            <Menu categories={categories} darkMode={darkMode} />
            <ShoppingCart darkMode={darkMode} />
          </div>
        </div>
      ) : null}
      <Footer
        title="Réplique de déliveroo créée par Adrien Callioni"
        darkMode={darkMode}
      />
    </div>
  );
};

export default App;
