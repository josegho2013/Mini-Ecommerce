import React, { useState } from "react";
import "../styles/cards.css";
import { Table, Button } from "reactstrap";
import Cart from "./Cart";

const Cards = (props) => {
  // const[deleteViaje, setDeleteViaje]=useState([])
  // const[vaciarCart, setVaciarCart]=useState([])

  const addDestino = (props) => {
    <Cart addDestino={props}/>
  };

  return (
    <div className="principal">
      <div className="card">
        <img
          className="img"
          src={props.img}
          alt=""
          height="200px"
          width="200px"
        />
        <h3>{props.name}</h3>
        <h4>Date:{props.date}</h4>
        <h4>
          price: {props.amount} ${" "}
          <Button outline color="warning" onClick={() => addDestino(props)}>
            Add to shopping Cart
          </Button>
        </h4>
        <div>
          <Button outline color="primary">
            Ver Mas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
