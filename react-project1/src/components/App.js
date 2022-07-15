import React from "react";
import CountButton from "./CountButton/CountButton";

const App = () => {
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={"blue"} />
      <CountButton incrementBy={5} buttonColor={"green"} />
      <CountButton incrementBy={10} buttonColor={"#ff0000"} />
    </div>
  );
};

export default App;
