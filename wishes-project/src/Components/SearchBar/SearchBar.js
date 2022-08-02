import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const wishes = props.wishes;

  //useState to store search value
  const [searchValue, setSearchValue] = useState("");

  //eventlistener
  const ListenToChange = (e) => {
    setSearchValue(e.target.value);
  };

  //filter the array to find if it includes the search value
  const filteredWishes = wishes.filter((wish) => {
    return wish.text.includes(searchValue);
  });

  // statement for conditional rendering
  const ShouldDisplayButton = searchValue.length > 0;

  //clear button func
  const HandleClearButton = () => {
    setSearchValue("");
  };

  //JSX text
  return (
    <div>
      <div className="search-bar-container">
        {" "}
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={ListenToChange}
        />
        {ShouldDisplayButton && (
          <div className="clear-button" onClick={HandleClearButton}>
            clear
          </div>
        )}
      </div>

      <ul>
        {filteredWishes.map((wish) => {
          return (
            <li>
              {"“" + wish.text + "”" + " "}
              {wish.author}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
