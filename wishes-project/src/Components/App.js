//import react and the components, styles, hooks

import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import WishButton from "./WishButton/WishButton";
import WishLibrary from "./WishLibrary/WishLibrary";
import { motion } from "framer-motion";

function App() {
  // run once when the app starts place it over everything so it goes in the state first (fetches data from local storage),  put the function in the wishesState state so it is the data the page starts working with when it loads
  const getLocalWishes = () => {
    const wishLocal = window.localStorage.getItem("wishes");
    return wishLocal ? JSON.parse(wishLocal) : [];
  };

  // i can pass these down as a prop (even the setInputText one)
  //store all states in app.js because there is no way to pass it up from a deeper lvl
  const [newWish, setNewWish] = useState([]);
  const [wishesState, setWishesState] = useState(getLocalWishes());
  const [status, setStatus] = useState("all");
  const [filteredWishes, setFilteredWishes] = useState([]);

  //Functions
  useEffect(() => {
    filterHandler();
    newWishFavoriteHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, wishesState]);

  //favoriteHandler
  const newWishFavoriteHandler = () => {
    wishesState.filter((wish) => {
      if (wish.id === newWish.id) {
        setNewWish(wish);
      }
      return [];
    });
  };

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
    console.log(wishesState.length);
    if (
      wishesState.length === null ||
      wishesState.length === undefined ||
      wishesState.length === 0
    ) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //save to local storage
  useEffect(() => {
    window.localStorage.setItem("wishes", JSON.stringify(wishesState));
  }, [wishesState]);

  //return JSX
  return (
    <div>
      <WishLibrary
        status={status}
        setNewWish={setNewWish}
        newWish={newWish}
        setWishesState={setWishesState}
        setStatus={setStatus}
        filteredWishes={filteredWishes}
        wishes={wishesState}
      >
        LIBRARY
      </WishLibrary>

      <WishButton
        newWish={newWish}
        setNewWish={setNewWish}
        setWishesState={setWishesState}
        wishes={wishesState}
      />

      <a
        href="https://github.com/gimesi13/Learning-React/tree/main/wishes-project"
        target="_blank"
        rel="noreferrer"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { delay: 0.5 },
            opacity: { delay: 0.5 },
            scale: { duration: 0.2 },
            type: "spring",
            stiffness: 60,
            duration: 1.6,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="github-logo"
        ></motion.div>
      </a>
    </div>
  );
}

export default App;

//styling
//local storage
