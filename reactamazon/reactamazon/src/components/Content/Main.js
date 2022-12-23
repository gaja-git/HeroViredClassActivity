import React, { useState, useEffect } from "react";
import "./Main.css";

export default function Main() {
  let [item, setItem] = useState([]);
  useEffect(() => {
    console.log("Inside useEffect");
    const fetchApi = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
      let products = data.products;
      setItem(products);
    };
    fetchApi();
  }, []);

  return (
    <div className="container">
      {item.map((ele) => (
        <div className="card">
          <div className="image-card">
            <img src={ele.thumbnail} alt="" />
          </div>
          <div className="card-content">
            <p>{ele.title}</p>
            <p>{ele.price}</p>
            <p>{ele.rating}</p>
            <button>Add To cart</button>
          </div>
        </div>
      ))}
    </div>

    //  <div class="card">
    //  <div class="image-card">
    //          <img src={ele.thumbnail} alt={ele.title}/>
    //  </div>
    //  </div>
    //  <div class ="card-content">
    //      <span> {ele.title}</span><br/>
    //      <span> {ele.brand}</span><br/>
    //      <span> {ele.price}</span><br/>
    //      <span>Rating: ${ele.rating}</span><br/>
    //  </div>
  );
}
