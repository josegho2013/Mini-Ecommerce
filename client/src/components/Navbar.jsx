import React from "react";
import Cart from "./Cart";
import "../styles/navbar.css";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <Cart />
      <button>boton</button>
      <button>boton</button>
    </div>
  );
};

export default NavBar;
