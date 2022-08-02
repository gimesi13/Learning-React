//import react,css
import React, { useState, useEffect } from "react";
import "./WishButton.css";
import MyWish from "../MyWish/MyWish";

const WishButton = (props) => {
  //use useState to store state of the random wish generated
  const [newWish, setNewWish] = useState([]);
  const [newWishAuthor, setNewWishAuthor] = useState([]);

  //handle click event
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    ///fix/// stop from displaying null if there is no author
    if (randomWish.author === null) {
      randomWish.author = "";
    }

    //update state
    setNewWish("“" + randomWish.text + "”" + " ");
    setNewWishAuthor(randomWish.author);
  };

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <span>
          <a onClick={GenerateWish} href="#"></a>
        </span>
      </div>

      <div>
        <MyWish>
          {newWish}
          {newWishAuthor}
        </MyWish>
      </div>
    </div>
  );
};

export default WishButton;
