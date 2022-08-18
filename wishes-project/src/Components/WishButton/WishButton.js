//import react,css
import React, { useState, useEffect } from "react";
import "./WishButton.css";
import { motion, useAnimation } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const WishButton = (props) => {
  //states
  const [clicked, setClicked] = useState(false);

  //useAnimation hook for animation new wishes
  const control = useAnimation();
  const controlStar = useAnimation();

  //conditional rendering
  const hasWishes = props.newWish.length !== 0;

  ////FUNCTIONS////
  //handle click event + control animation
  const GenerateWish = () => {
    //random logic
    const randomWish =
      props.wishes[Math.floor(Math.random() * props.wishes.length)];

    //update state
    props.setNewWish(randomWish);
    setClicked(!clicked);
  };

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
    control.set({ scale: 0 });
    control.start({
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.5 },
    });
    controlStar.set({ opacity: 0, x: 600 });
    controlStar.start({
      opacity: 1,
      x: 0,
      borderRadius: ["10%", "10%", "50%", "50%", "20%", "20%"],
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: 0.4,
        borderRadius: { duration: 1.3 },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

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
            <motion.div
              animate={controlStar}
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={`star ${props.newWish.favorite ? "full" : ""}`}
              onClick={favoriteHandler}
            >
              {props.newWish.favorite ? <AiFillStar /> : <AiOutlineStar />}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WishButton;
