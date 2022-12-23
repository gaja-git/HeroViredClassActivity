import React, { useContext } from "react";
import DataContext from "../context/DataContext.js";

export default function CounterContext() {
  let ctx = useContext(DataContext);

  console.log(ctx);
  const Increment = () => {
    // ctx.setCounter((prev) => {
    //   return prev + 1;
    // });
    ctx.setisLoggedIn(false);
  };

  const Decrement = () => {
    ctx.SetCounter((prev) => {
      return prev - 1;
    });
  };

  return (
    <div>
      <button onClick={Increment}>+</button>
      <button /*onClick={Decrement}*/>-</button>
      <p>{ctx.counter}</p>
    </div>
  );
}
