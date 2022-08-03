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
        </div>
      )}
    </div>
  );
};

export default WishButton;
