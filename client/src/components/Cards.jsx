import React from "react";
import "../styles/cards.css";

const Cards = ({ img, name, date, amount }) => {
  return (
    <div className="card">
      <img  className="img" src={img} alt="" height="200px" width="200px" />
      <h2>{name}</h2>
      <h4>Date:{date}</h4>
      <h3>Costo: {amount} $  <button color=" green">comprar</button> </h3>
    
      <div>  <button>Ver Mas</button></div>
    

    </div>
  );
};

export default Cards;
