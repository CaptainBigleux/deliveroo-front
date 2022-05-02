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
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-ac.herokuapp.com/"
      );
      console.log(response.data);

      setData(response.data);
      setisLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={darkMode ? "app-dark" : "app"}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      {!isLoading ? (
        <div className={darkMode ? "container dark-mode" : "container"}>
          <Restaurant
            title={"Le Pain Quotidien"}
            city={"Montorgueil"}
            desc={"top"}
            image={"img"}
          />
          <Menu />
          <ShoppingCart />
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
