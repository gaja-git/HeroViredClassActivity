import React, { useState, useEffect } from "react";
import "./Main.css";
import axios from "axios";

//whenever this compnent render on dom, api should get called once;
//whatever data is provided by api, we will store in state
//we will manuipulate the data to show them on frontend
export default function Main() {
  let [item, setItem] = useState([]);
  useEffect(() => {
    console.log("Inside useEffect");
    const fetchApi = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        // let data = await response.json();
        // console.log(data);
        let products = response.data.products;
        // setItem((prev) => [...prev, products]);
        setItem(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="container">
      {/* {item.length !== 0 ? ( */}
      {item.length &&
        item.map((ele) => (
          <div className="card">
            <div className="image-card">
              <img src={ele.thumbnail} alt="ele.title" />
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
