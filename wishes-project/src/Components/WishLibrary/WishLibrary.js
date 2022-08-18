import React, { useState } from "react";
import "./WishLibrary.css";
import SearchBar from "../SearchBar/SearchBar";
import { motion, useAnimation } from "framer-motion";
import bookicon from "../undraw_bibliophile_re_xarc.svg";

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
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="wish-library"
        >
          <div className="library-header">
            <img className="book-icon" src={bookicon} alt="bookicon" />
            <h1>Library:</h1>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={HandleClick}
            className="button-35"
          >
            BACK
          </motion.div>
          <div className="searchbar-container">
            <SearchBar
              statusHandler={statusHandler}
              showLibrary={showLibrary}
              status={props.status}
              setNewWish={props.setNewWish}
              newWish={props.newWish}
              setWishesState={props.setWishesState}
              filteredWishes={props.filteredWishes}
              wishes={props.wishes}
            />
          </div>
        </motion.div>
        /* ) */
      }
    </div>
  );
};

export default WishLibrary;
