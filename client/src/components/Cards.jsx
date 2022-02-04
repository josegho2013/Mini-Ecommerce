import React, { useState } from "react";
import "../styles/cards.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import Cart from "./Cart";

const Cards = (props) => {
  // const[deleteViaje, setDeleteViaje]=useState([])
  // const[vaciarCart, setVaciarCart]=useState([])
  const [mostarModal, setMostarModal] = useState(false);
  const [test, setTest] = useState(false);

  const addDestino = (props) => {
    console.log("props cards", props);
    setTest(true);
    return <Cart addDestino={props} />;
  };
  const mostrardetalle = () => {
    setMostarModal(true);
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
          {test && <Cart hidden addDestino={props} />}
        </h4>
        <Modal isOpen={mostarModal}></Modal>
        <div>
          <Button outline color="primary" onClick={() => mostrardetalle()}>
            Ver Mas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
