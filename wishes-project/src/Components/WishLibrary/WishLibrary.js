import React, { useState, useEffect } from "react";
import "./WishLibrary.css";

const WishLibrary = (props) => {
  //store wishes in a state
  const [wishes, setWishes] = useState("");

  //map trough wishes
  const ShowLibrary = () => {
    const randomWish = props.wishes.map((wish) => {
      return wish; //this is still shit
    });
    console.log(randomWish.text);
    setWishes(randomWish.text);
  };

  return (
    <div onClick={ShowLibrary} className="WishLibrary">
      {props.children}
      <div>{wishes}</div>
    </div>
  );
};

export default WishLibrary;
