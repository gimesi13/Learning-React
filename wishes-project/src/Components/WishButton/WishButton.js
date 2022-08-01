//import react,css
import React, { useState, useEffect } from "react";
import "./WishButton.css";
import MyWish from "../MyWish/MyWish";

const WishButton = (props) => {
  //use useState to store state
  const [newWish, setNewWish] = useState("");

  //handle click event
  const GenerateWish = () => {
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];
    setNewWish(randomWish.text);
  };

  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <span>
          <a onClick={GenerateWish} href="#"></a>
        </span>
      </div>

      <div>
        <MyWish>{newWish}</MyWish>
      </div>
    </div>
  );
};

export default WishButton;
