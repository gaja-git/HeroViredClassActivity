import React from "react";
import "./subheader.css";

export default function Subheader() {
  return (
    <div className="subheader">
      <div>
        <span>
          <i className="fa fa-reorder"></i>
          All
        </span>
      </div>
      <div>Today's Deals</div>
      <div>Customer Serivce</div>
      <div>Registry</div>
      <div>GIft Cards</div>
      <div>Sell</div>
    </div>
  );
}
