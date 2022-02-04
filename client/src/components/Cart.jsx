import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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

const Cart = () => {
  const [abrirModal, setAbrirModal] = useState(false);
  //   const [cerrarModal, setCerrarModal] = useState(false);

  const mostarModal = () => {
    setAbrirModal(true);
  };
  const cerrarModal = () => {
    setAbrirModal(false);
  };
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="principal">
      <div className="secundario">
        <Container>
          <AiOutlineShoppingCart
            size="4rem"
            onClick={mostarModal}
            cursor={"pointer"}
          />
          <Modal isOpen={abrirModal} style={modalStyles}>
            <AiOutlineClose size="2rem" onClick={cerrarModal} color="danger" />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>item</th>
                  <th>img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody></tbody>
              <ModalFooter>
                <Button color="primary" >vaciar carrito</Button>
              </ModalFooter>
            </Table>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
