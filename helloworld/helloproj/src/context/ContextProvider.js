import React, { useState } from "react";
import DataContext from "./DataContext.js";

export default function ContextProvider({ children }) {
  let [counter, setCounter] = useState(0);
  let [isLoggedin, setisLoggedIn] = useState(true);

  return (
    <DataContext.Provider
      value={{
        counter,
        setCounter,
        setisLoggedIn,
        isLoggedin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
