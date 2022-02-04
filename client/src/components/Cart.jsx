import React, { useEffect, useState } from "react";
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

const Cart = (props) => {
  console.log("aquii", props);
  const [abrirModal, setAbrirModal] = useState(false);
  //   const [cerrarModal, setCerrarModal] = useState(false);
  const [addViaje, setAddViaje] = useState([]);
  console.log("addViaje", addViaje);

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
  useEffect(() => {
    if (props?.addDestino) {
      console.log("prueba: ", addViaje);
      let lista = [...addViaje];
      lista.push(props.addDestino);

      setAddViaje(lista);
      //   setAddViaje([...addViaje, props.addDestino]);
      //   setAddViaje({...addViaje, props.addDestino});
    }
  }, []);

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
                  <th>ID</th>
                  <th>img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {addViaje.length > 0 &&
                  addViaje.map((dato) => {
                    return (
                      <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>
                          {" "}
                          <img
                            className="img"
                            src={dato.img}
                            alt=""
                            height="20px"
                            width="20px"
                          />
                        </td>
                        <td>{dato.name}</td>
                        <td>{dato.amount}</td>
                      </tr>
                    );
                  })}
              </tbody>
              <ModalFooter>
                <Button color="primary">Vaciar carrito</Button>
              </ModalFooter>
            </Table>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
