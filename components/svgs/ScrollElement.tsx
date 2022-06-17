import React from "react";

const ScrollElement = () => {
  return (
    <svg viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="25"
        rx="6"
        className="scroll-color-stroke"
        stroke="#303030"
      />
      <circle className="scroll-color" cx="7" cy="7" r="3" fill="#303030" />
    </svg>
  );
};

export default ScrollElement;
