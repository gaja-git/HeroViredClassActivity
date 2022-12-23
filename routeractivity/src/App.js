import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="HomePage" element={<HomePage />}></Route>
        <Route exact path="AboutUs" element={<AboutUs />}></Route>
        <Route exact path="ContactUs" element={<ContactUs />}></Route>
      </Routes>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="AboutUs">About</Link>
        </li>
        <li>
          {" "}
          <Link to="ContactUs">ContactUS</Link>
        </li>
      </ul>
    </Router>
    // <div>
    //   <HomePage></HomePage>
    //   <AboutUs></AboutUs>
    //   <ContactUs></ContactUs>
    // </div>
  );
}

export default App;
