import React from "react";
import "../styles/cards.css";
import {
  Table,
  Button,
  
} from "reactstrap";


const Cards = ({ img, name, date, amount }) => {
  return (
    <div className="principal">
      
    <div className="card">
      <img className="img" src={img} alt="" height="200px" width="200px" />
      <h3>{name}</h3>
      <h4>Date:{date}</h4>
      <h4>
        price: {amount} $ <Button outline color="warning">Add to shopping Cart</Button>
      </h4>
      <div>
        <Button outline color="primary">Ver Mas</Button>
      </div>
      </div>
    </div>
  );
};

export default Cards;
