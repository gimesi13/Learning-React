import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white flex justify-center ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-2xl sm:text-2xl text-xl">
          GROW WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></Typed>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[gray]">
          Monitor your data analytics to increase revenue for BTB. BTC, and SASS
          platforms.
        </p>
        <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
