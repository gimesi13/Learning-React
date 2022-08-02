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
    </div>
  );
}

export default App;
