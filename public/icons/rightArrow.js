import * as React from "react";

const RightArrow = (props) => (
  <svg
    id="right-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon line"
    width={28}
    height={28}
    {...props}
  >
    <polyline
      id="primary"
      points="7.5 3 16.5 12 7.5 21"
      style={{
        fill: "none",
        stroke: "white",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
      }}
    />
  </svg>
);
export default RightArrow;
