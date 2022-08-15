import React, { useState, useEfect } from "react";
import "./SearchBar.css";
import { motion, useAnimation } from "framer-motion";

const SearchBar = (props) => {
  const wishes = props.filteredWishes;

  //useState to store search value
  const [searchValue, setSearchValue] = useState("");
  // number of quotes shown
  const [visible, setVisible] = useState(15);

  //eventlistener
  const ListenToChange = (e) => {
    setSearchValue(e.target.value);
    //animation for search items
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

  //favoritehandler
  /*const favoriteHandler = () => {
    props.wishes.map((wish) => {
      if (wish.id === props.newWish.id) {
        props.setNewWish(wish);
        console.log(props.newWish);
        console.log("this is the displayed wish");
      }
    });
  };*/

  ///ANIMATIONS///

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

      {props.showLibrary ? (
        <ul>
          {filteredWishes.slice(0, visible).map((wish, id, favorite) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: (id - (visible - 15)) * 0.05,
                  when: "beforeChildren",
                }}
                className={`wish-item ${wish.favorite ? "favorite" : ""}`}
                id={id}
                key={id}
              >
                <div className="wish-text">{"“" + wish.text + "” "}</div>
                {"-" + wish.author}

                <button
                  className={`star lib ${wish.favorite ? "full" : ""}`}
                  onClick={() => {
                    props.setWishesState(
                      props.wishes.map((thisWish) => {
                        if (wish.id === thisWish.id) {
                          return { ...wish, favorite: !wish.favorite };
                        }
                        return thisWish;
                      })
                    );
                  }}
                >
                  {` ${wish.favorite ? "★" : "☆"}`}
                </button>
              </motion.li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
      {canLoadMore && (
        <button className="load-more-button button-59" onClick={showMoreItems}>
          Load more
        </button>
      )}
    </div>
  );
};

export default SearchBar;
