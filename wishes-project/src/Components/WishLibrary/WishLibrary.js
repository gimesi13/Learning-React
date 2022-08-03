import React, { useState } from "react";
import "./WishLibrary.css";
import SearchBar from "../SearchBar/SearchBar";

//create component
const WishLibrary = (props) => {
  //store wishes in a state
  const wishprops = props.wishes;

  //display only after clicked and loaded

  const [shouldDisplay, setShouldDisplay] = useState(false);

  const HandleClick = () => {
    if (shouldDisplay === false) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
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
            <SearchBar wishes={wishprops} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WishLibrary;
