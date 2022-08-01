import React, { useState } from "react";
import "./HamburgerMenu.css";
import SubmitWish from "../SubmitWish/SubmitWish";
import WishLibrary from "../WishLibrary/WishLibrary";

const HamburgerMenu = (props) => {
  const wishes = props.wishes;
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const HandleClick = () => {
    if (shouldDisplay === false) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
  };

  return (
    <div className="nav-ui">
      <div className="hamburger-icon" onClick={HandleClick}>
        MENU
      </div>
      {shouldDisplay && <SubmitWish>submit wish</SubmitWish>}
      {shouldDisplay && <WishLibrary wishes={wishes}>wish library</WishLibrary>}
    </div>
  );
};

export default HamburgerMenu;
