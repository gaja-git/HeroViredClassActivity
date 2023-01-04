import React, { useState, useEffect } from "react";
import "./subheader.css";

export default function Subheader() {
  //making state
  let [hover, setHover] = useState(false);

  //inline style attribute takes an object
  let mystyles = {
    backgroundColor: "grey",
  };

  let hoverStyle = {
    border: hover ? "1px solid black" : "none",
  };

  const handleHoverIn = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    setHover(false);
  };

  useEffect(() => {
    let subheader = document.querySelector(".subheader");
    console.log(subheader.children);
    let childofsubheader = subheader.children;
    for (let i = 0; i < childofsubheader.length; i++)
      childofsubheader[i].addEventListener("mouseenter", () => {
        childofsubheader[i].style.border = "1px solid black";
      });
    for (let i = 0; i < childofsubheader.length; i++)
      childofsubheader[i].addEventListener("mouseleave", () => {
        childofsubheader[i].style.border = "none";
      });
  });

  return (
    <div className="subheader" style={mystyles}>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        <span>
          <i className="fa fa-reorder"></i>
          All
        </span>
      </div>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        Today's Deals
      </div>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        Customer Serivce
      </div>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        Registry
      </div>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        GIft Cards
      </div>
      <div
      // onMouseEnter={handleHoverIn}
      // onMouseLeave={handleHoverOut}
      // style={hoverStyle}
      >
        Sell
      </div>
    </div>
  );
}
