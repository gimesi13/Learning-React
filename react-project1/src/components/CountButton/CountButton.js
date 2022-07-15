import React, { useState } from "react";
import "./CountButton.css";

const CountButton = (probs) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + probs.incrementBy);
  };

  const buttonStyles = {
    color: probs.buttonColor,
    border: "1px solid black",
  };

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        +{probs.incrementBy}
      </button>
      <div className={"count-display"}>{currentCount}</div>
    </div>
  );
};

export default CountButton;
