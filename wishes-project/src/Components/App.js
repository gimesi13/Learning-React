//import react and the components, styles

import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import WishButton from "./WishButton/WishButton";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

// const hasWish = wishes.length > 0;

function App() {
  const [wishesState, setWishesState] = useState([]);

  //useEffect to render API
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((dataArray) => {
        const newWishes = dataArray.map((wish) => {
          return wish;
        });
        setWishesState(dataArray);
      });
  }, []);
  return (
    <div>
      <HamburgerMenu wishes={wishesState}></HamburgerMenu>

      <WishButton wishes={wishesState} />
    </div>
  );
}

export default App;
