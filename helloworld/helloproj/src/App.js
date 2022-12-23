import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/HelloWorld";
import Namastae from "./components/Namastae";
import Counter from "./components/Counter";
import React, { useState, useContext } from "react";
import UseEffectSample from "./components/UseEffect";
import DataContext from "./context/DataContext";
import CounterContext from "./components/CounterContext.js";

function App() {
  const [show, setShow] = useState(0);
  const Person = [
    { name: "Anu", Phone: "12344566", mail: "anu@gmail.com" },
    { name: "Anil ", Phone: "12344566", mail: "anil@gmail.com" },
    { name: "Banu", Phone: "12344566", mail: "banu@gmail.com" },
    { name: "Cinu", Phone: "12344566", mail: "cinu@gmail.com" },
    { name: "Dhaamu", Phone: "12344566", mail: "dhanu@gmail.com" },
  ];
  let ctx = useContext(DataContext);
  return (
    <div className="App">
      {/* <div>Person D</div> */}
      {/* {Person.map(per => <Hello name={per.name} phone={per.Phone} mail={per.mail}></Hello>)}  */}
      {/* {Person.map(per => <Namastae name={per.name} phone={per.Phone} mail={per.mail}>From Namaste</Namastae>)} */}
      {/* <State name></State> */}
      {/* <button onClick={() => setShow(1)}>Mount</button>
      <button onClick={() => setShow(0)}>UnMount</button>
      <br></br>
      {show == 1 ? <Counter></Counter> : <></>} */}
      <UseEffectSample></UseEffectSample>
      {/* {ctx.isLoggedin && <CounterContext />} */}
      {/* <CounterContext></CounterContext> */}
    </div>
  );
}

export default App;
