import React, { useState } from "react";
import "./WishLibrary.css";
import SearchBar from "../SearchBar/SearchBar";

//create component
const WishLibrary = (props) => {
  //store wishes in a state

  //display only after clicked and loaded

  const [shouldDisplay, setShouldDisplay] = useState(false);

  const HandleClick = () => {
    if (shouldDisplay === false) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
    props.setStatus("all");
  };

  //status handler for filtering favorites

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <div className="container">
      <div onClick={HandleClick} className="button-50">
        {props.children}
      </div>

      {shouldDisplay && (
        <div className="wish-library">
          {" "}
          <h1>Quote Library</h1>
          <div onClick={HandleClick} className="button-35">
            BACK
          </div>
          <div className="searchbar-container">
            {" "}
            <SearchBar
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
        </div>
      )}
    </div>
  );
};

export default WishLibrary;
