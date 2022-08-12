//import react,css
import React from "react";
import "./WishButton.css";

const WishButton = (props) => {
  //use useState to store state of the random wish generated

  //handle click event
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    //update state
    props.setNewWish(randomWish);
  };

  //conditional rendering
  const hasWishes = props.newWish.length !== 0;

  //favorite handler
  const favoriteHandler = () => {
    props.setWishesState(
      props.wishes.map((wish) => {
        if (wish.id === props.newWish.id) {
          //!. wish.favorite changes completed boolean to the opposite (true), this is also responsible for toggling
          return { ...wish, favorite: !wish.favorite };
        }
        // else return the original
        return wish;
      })
    );

    props.setNewWish({ ...props.newWish, favorite: !props.newWish.favorite });
  };

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <div className="main-button" onClick={GenerateWish}>
          <a></a>
        </div>
      </div>

      {hasWishes && (
        <div className="myWish.container">
          <div className={`myWish ${props.newWish.favorite ? "favorite" : ""}`}>
            {"“" + props.newWish.text + "” "}
            {"-" + props.newWish.author}
            <button
              className={`star ${props.newWish.favorite ? "full" : ""}`}
              onClick={favoriteHandler}
            >
              {` ${props.newWish.favorite ? "★" : "☆"}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishButton;
