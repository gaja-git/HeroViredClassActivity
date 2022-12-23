import React, { useEffect, useState } from "react";

export default function UseEffectSample() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState(0);
  const [test, setTest] = useState(0);
  let [arr, setArr] = useState([]);

  useEffect(() => {
    console.log("Inside UseEffect");
    setProduct(() => count * 2);
    const fetchApi = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
      let products = data.products;
      // setArr([...arr, products]);
      setArr([...arr, products]);
    };
    fetchApi();
  }, [count, test]);

  function testing() {
    setTest(test + 1);
  }

  function handleClick() {
    console.log(arr);
  }

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={testing}>Test</button>
      <button onClick={handleClick}>Click</button>
      <p>{count}</p>
      <p>{product}</p>
      {/* {arr.map(ele => { <p>{ele.id}</p>
      <p>{ele.title}</p>}
      )} */}
    </div>
  );
}
