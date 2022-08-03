//import react and the components, styles, hooks

import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import WishButton from "./WishButton/WishButton";
import WishLibrary from "./WishLibrary/WishLibrary";

function App() {
  const [wishesState, setWishesState] = useState([]);

  //useEffect to fetch API
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((dataArray) => {
        const newWishes = dataArray.map((wish) => {
          if (wish.author === null) {
            wish.author = "unknown";
          }
          return wish;
        });
        setWishesState(newWishes);
      });
  }, []);

  //return JSX
  return (
    <div>
      <WishLibrary wishes={wishesState}>LIBRARY</WishLibrary>

      <WishButton wishes={wishesState} />

      <a
        href="https://github.com/gimesi13/Learning-React/tree/main/wishes-project"
        target="_blank"
      >
        <div className="github-logo"></div>
      </a>
    </div>
  );
}

export default App;

//styling
//add github link to bottom
