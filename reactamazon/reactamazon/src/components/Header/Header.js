import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="section1">
        <div className="logo">
          <img src="/images/amazon.png" alt="amazon_log" />
        </div>
        <div className="deliver">
          <div className="icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="deliver-content">
            <div>Deliver to</div>
            <div>India</div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="searchbox">
          <div className="drpdwnBtn">
            <select name="All" id="items">
              <option value="All">All</option>
              <option value="Arts & Crafts">Arts% crafts</option>
              <option value="Automotive">Automotive</option>
              <option value="Computers">Computers</option>
              <option value="Luggage">Luggage</option>
            </select>
          </div>
          <input type="text" />
        </div>
      </div>
      <div className="section3">
        <div className="signin">
          <button>signin</button>
        </div>
        <div className="order">
          <span>Returns</span>
          <span>&Orders</span>
        </div>
        <div className="cart">
          <i className="fa fa-shopping-cart">cart</i>
        </div>
      </div>
    </div>
  );
}
