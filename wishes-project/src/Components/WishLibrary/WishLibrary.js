import React, { useState } from "react";
import "./WishLibrary.css";
import SearchBar from "../SearchBar/SearchBar";

//create component
const WishLibrary = (props) => {
  //store wishes in a state
  const wishprops = props.wishes;
  const [wishes, setWishes] = useState("");

  //display only after clicked and loaded

  //const hasWishes = wishes.length > 0;

  //backbutton function
  /*const HandleBackButton = () => {
    setWishes("");
  };*/

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
      <div onClick={HandleClick} className="wish-library-button">
        {props.children}
      </div>

      {shouldDisplay && (
        <div className="wish-library">
          {" "}
          <h1>Wish Library</h1>
          <div onClick={HandleClick} className="back-button">
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
