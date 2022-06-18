import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/loader.json";

const Loader = () => {
  return (
    <div className="lottie-container">
      <h2>Loading...</h2>
      <Lottie
        style={{
          height: "50vh",
        }}
        animationData={loadingAnimation}
      />
    </div>
  );
};

export default Loader;
