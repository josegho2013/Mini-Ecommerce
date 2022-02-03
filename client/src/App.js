import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        

      </Routes>
    </div>
  );
}

export default App;
