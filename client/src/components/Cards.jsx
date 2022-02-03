import React from "react";

const Cards = ({ img, name, description, date, amount }) => {
  return (
    <div>
      <img src={img} alt="" height="300px" width="300px" />

      <h2>{name}</h2>

      <p>{description}</p>
      <date>Date :{date}</date>
      <h3>costo: {amount}</h3>
      <button>comprar</button>
    </div>
  );
};

export default Cards;
