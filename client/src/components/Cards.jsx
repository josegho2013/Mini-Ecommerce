import React from "react";
import "../styles/cards.css";

const Cards = ({ img, name, date, amount }) => {
  return (
    <div className="card">
      <img src={img} alt="" height="300px" width="300px" />

      <h2>{name}</h2>
      <h3>Date :{date}</h3>
      <div>
      <h3>costo: {amount}</h3>
      </div>
      <div>
      <button>comprar</button>
      </div>
    </div>
  );
};

export default Cards;
