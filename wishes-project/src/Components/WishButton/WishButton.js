//import react,css
import React from "react";
import "./WishButton.css";
import { motion, useAnimation } from "framer-motion";

const WishButton = (props) => {
  //useanimation hook for animatzion new wishes
  const control = useAnimation();

  //handle click event + control animation
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    //update state
    props.setNewWish(randomWish);

    //ANIMATION CONTROLS

    control.start({
      opacity: [0, 1],
    });
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
  const boxVariant = {
    hidden: {
      scale: 0,
    },
    /* animate before children makes the children wait with its animation until parent is done with it*/
    visible: { scale: 1, transition: { delay: 0, when: "beforeChildren" } },
  };

  const starVariant = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    /*staggerChildren makes the next child wait until the previous is done with its animation*/
    visible: {
      x: 0,
      opacity: 1,
      borderRadius: ["10%", "50%", "50%", "10%"],
    },
  };

  //return JSX
  return (
    <div className="wish-button-container">
      <div className="wish-button">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
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
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            className={`myWish ${props.newWish.favorite ? "favorite" : ""}`}
          >
            {"“" + props.newWish.text + "” "}
            {"-" + props.newWish.author}
            <motion.button
              variants={starVariant}
              transition={{ delay: 0.3 }}
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
