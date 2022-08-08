//import react and the components, styles, hooks

import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import WishButton from "./WishButton/WishButton";
import WishLibrary from "./WishLibrary/WishLibrary";

function App() {
  // i can pass these down as a prop (even the setInputText one)
  //store all states in app.js because there is no way to pass it up from a deeper lvl
  const [wishesState, setWishesState] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredWishes, setFilteredWishes] = useState([]);

  //Functions
  useEffect(() => {
    filterHandler();
  }, [status, wishesState]);

  //switch for filtering favorites
  const filterHandler = () => {
    switch (status) {
      case "favorites":
        setFilteredWishes(wishesState.filter((wish) => wish.favorite === true));
        break;
      default:
        setFilteredWishes(wishesState);
        break;
    }
  };

  //useEffect to fetch API
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((dataArray) => {
        const newWishes = dataArray.map((wish) => {
          if (wish.author === null) {
            wish.author = "unknown";
          }
          if (wish.favorite === undefined) {
            wish.favorite = false;
          }
          if (wish.id === undefined) {
            wish.id = Math.random() * 1000;
          }

          return wish;
        });
        setWishesState(newWishes);
      });
  }, []);

  //return JSX
  return (
    <div>
      <WishLibrary
        setWishesState={setWishesState}
        setStatus={setStatus}
        filteredWishes={filteredWishes}
        wishes={wishesState}
      >
        LIBRARY
      </WishLibrary>

      <WishButton setWishesState={setWishesState} wishes={wishesState} />

      <a
        href="https://github.com/gimesi13/Learning-React/tree/main/wishes-project"
        target="_blank"
        rel="noreferrer"
      >
        <div className="github-logo"></div>
      </a>
    </div>
  );
}

export default App;

//styling
//local storage
