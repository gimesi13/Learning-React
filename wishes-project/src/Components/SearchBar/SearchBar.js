import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const wishes = props.wishes;

  //useState to store search value
  const [searchValue, setSearchValue] = useState("");
  // number of quotes shown
  const [visible, setVisible] = useState(15);

  //eventlistener
  const ListenToChange = (e) => {
    setSearchValue(e.target.value);
  };

  //filter the array to find if it includes the search value
  const filteredWishes = wishes.filter((wish) => {
    return wish.text.includes(searchValue) || wish.author.includes(searchValue);
  });

  // statement for conditional rendering
  const ShouldDisplayButton = searchValue.length > 0;

  //clear button func
  const HandleClearButton = () => {
    setSearchValue("");
    setVisible(15);
  };

  // increment the number of items shown of load more event, I use slice func to show only X items at once but only if there is enough items to show
  const showMoreItems = () => {
    if (filteredWishes.length < visible) {
      console.log("no more items to load");
    } else {
      setVisible((prevValue) => prevValue + 15);
    }
  };

  // conditional rendering for load more
  const canLoadMore = filteredWishes.length > visible;

  //JSX text
  return (
    <div className="searchbar-body">
      <div className="search-bar-container">
        {" "}
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={ListenToChange}
          placeholder="Search..."
        />
        {ShouldDisplayButton && (
          <div className="button-59" onClick={HandleClearButton}>
            clear
          </div>
        )}
      </div>

      <ul>
        {filteredWishes.slice(0, visible).map((wish, favorite) => {
          let id = Math.random() * 1000;
          return (
            <li favorite={false} id={id} key={id}>
              {"“" + wish.text + "” "}
              {"-" + wish.author}
            </li>
          );
        })}
      </ul>
      {canLoadMore && (
        <button className="load-more-button button-59" onClick={showMoreItems}>
          Load more
        </button>
      )}
    </div>
  );
};

export default SearchBar;
