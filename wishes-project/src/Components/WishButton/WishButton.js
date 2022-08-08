//import react,css
import React, { useState } from "react";
import "./WishButton.css";
import MyWish from "../MyWish/MyWish";

const WishButton = (props) => {
  //use useState to store state of the random wish generated
  const [newWish, setNewWish] = useState("");

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
          //!. wish.favorite changes completed bolean to the opposite (true), this is also responsible for toggling
          return { ...wish, favorite: !wish.favorite };
        }
        // else return the original
        return wish;
      })
    );
  };

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <span>
          <a onClick={GenerateWish} href="#"></a>
        </span>
      </div>

      {hasWishes && (
        <div>
          <MyWish>
            {"“" + newWish.text + "” "}
            {"-" + newWish.author}
          </MyWish>
          <button onClick={favoriteHandler}>fav</button>
        </div>
      )}
    </div>
  );
};

export default WishButton;
