//import react,css
import React, { useState, useEffect } from "react";
import "./WishButton.css";

const WishButton = (props) => {
  //use useState to store state of the random wish generated
  const [newWish, setNewWish] = useState([]);

  //handle click event
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    //update state
    setNewWish(randomWish);
  };

  //conditional rendering
  const hasWishes = newWish.length !== 0;

  const favoriteHandler = () => {
    props.setWishesState(
      props.wishes.map((wish) => {
        if (wish.id === newWish.id) {
          //!. wish.favorite changes completed boolean to the opposite (true), this is also responsible for toggling
          return { ...wish, favorite: !wish.favorite };
        }
        // else return the original
        return wish;
      })
    );
    setNewWish({ ...newWish, favorite: !newWish.favorite });
  };

  /*useEffect(() => {
    favoriteHandler();
  }, []);*/

  // have to fix favorite star

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <span>
          <a onClick={GenerateWish} href="#"></a>
        </span>
      </div>

      {hasWishes && (
        <div className="myWish.container">
          <div className={`myWish ${newWish.favorite ? "favorite" : ""}`}>
            {"“" + newWish.text + "” "}
            {"-" + newWish.author}
            <button
              className={`star ${newWish.favorite ? "full" : ""}`}
              onClick={favoriteHandler}
            >
              {` ${newWish.favorite ? "★" : "☆"}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishButton;
