import React, { useState } from "react";
import "./WishLibrary.css";
import SearchBar from "../SearchBar/SearchBar";
import { motion, useAnimation } from "framer-motion";

//create component
const WishLibrary = (props) => {
  //animation states
  const [showLibrary, setShowLibrary] = useState(false);
  //display only after clicked and loaded

  /*   const [shouldDisplay, setShouldDisplay] = useState(false); */

  const HandleClick = () => {
    setShowLibrary(!showLibrary);
    /* if (shouldDisplay === false) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    } */
  };

  //status handler for filtering favorites

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.5, duration: 1 }}
        onClick={HandleClick}
        className="button-50"
      >
        {props.children}
      </motion.div>

      {
        /* shouldDisplay && ( */
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: showLibrary ? 0 : "-100%" }}
          className="wish-library"
        >
          <h1>Quote Library</h1>
          <div onClick={HandleClick} className="button-35">
            BACK
          </div>
          <div className="searchbar-container">
            <SearchBar
              showLibrary={showLibrary}
              status={props.status}
              setNewWish={props.setNewWish}
              newWish={props.newWish}
              setWishesState={props.setWishesState}
              filteredWishes={props.filteredWishes}
              wishes={props.wishes}
            />
            <select className="select" onChange={statusHandler}>
              <option value="all">All</option>
              <option value="favorites">Favorites</option>
            </select>
          </div>
        </motion.div>
        /* ) */
      }
    </div>
  );
};

export default WishLibrary;
