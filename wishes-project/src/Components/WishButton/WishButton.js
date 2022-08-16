//import react,css
import React, { useState, useEffect } from "react";
import "./WishButton.css";
import { motion, useAnimation } from "framer-motion";

const WishButton = (props) => {
  //
  const [clicked, setClicked] = useState(false);

  //useAnimation hook for animation new wishes
  const control = useAnimation();
  const controlStar = useAnimation();

  //handle click event + control animation
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    //update state
    props.setNewWish(randomWish);
    setClicked(!clicked);
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

  //ANIMATIONS//
  //ANIMATION CONTROLS
  useEffect(() => {
    control.start({
      scale: [0, 1, 0.9, 1],
      transition: { duration: 0.8 },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    controlStar.start({
      x: [600, 600, 600, 600, 600, -20, 0, -10, -10, -10],
      opacity: [0, 1],
      borderRadius: ["10%", "10%", "10%", "50%", "50%", "20%"],
      transition: { duration: 1.5 },
    });
  }, [clicked]);

  /*   const boxVariant = {
    hidden: {
      scale: 0,
    },
    // animate before children makes the children wait with its animation until parent is done with it
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  }; */

  /*   const starVariant = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    //staggerChildren makes the next child wait until the previous is done with its animation
    visible: {
      x: 0,
      opacity: 1,
      borderRadius: ["10%", "50%", "50%", "10%"],
    },
  }; */

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.5,
          }}
          whileTap={{ scale: 0.9 }}
          className="main-button"
          onClick={GenerateWish}
        >
          <a></a>
        </motion.div>
      </div>

      {hasWishes && (
        <motion.div animate={control} className="myWish.container">
          <motion.div
            className={`myWish ${props.newWish.favorite ? "favorite" : ""}`}
          >
            {"“" + props.newWish.text + "” "}
            {"-" + props.newWish.author}
            <motion.button
              animate={controlStar}
              /* variants={starVariant} */
              className={`star ${props.newWish.favorite ? "full" : ""}`}
              onClick={favoriteHandler}
            >
              {` ${props.newWish.favorite ? "★" : "☆"}`}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WishButton;
