import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                L 11, 27
                L 11, 72
                L 50, 95
                L 89, 73
                L 89, 28 z"
      />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="40" fill="currentColor">
        A
      </text>
    </svg>
  );
}

export default Logo;
