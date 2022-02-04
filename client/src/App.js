import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Navbar" element={<Cart />} />

        

      </Routes>
    </div>
  );
}

export default App;
