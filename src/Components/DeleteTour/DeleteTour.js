import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalConfirm from "./../Modals/ModalConfirm";
import ModalAlert from "./../Modals/ModalAlert";

const DeleteTour = () => {
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);
  const handleAlert = () => setShowAlert(true);
  // Confirmation Modal
  // Confirmation Modal
  // Confirmation Modal
  const [orderId, setOrderId] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/allTour")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleOrderDelete = (id) => {
    handleClose();
    fetch(`https://fast-crag-74063.herokuapp.com/deleteTour/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
          setAlertText("Tour Deleted");
          handleAlert();
        }
      });
  };
  const sendIdToModal = (id) => {
    setOrderId(id);
    handleShow();
  };
  return (
    <div className="bgMyOrders py-5">
      <h1 className="display-2 my-5">All Tours</h1>
      <Container>
        {orders.length === 0 ? (
          <h1 className="fw-light">You dont have any pending bookings !</h1>
        ) : (
          <Row>
            {orders.map((order) => (
              <Col key={order._id} sm={12} md={6} lg={4} className="mb-3">
                <div className="orderView">
                  <img src={order.img} alt="" />
                  <h4 className="fw-light mt-3">{order.name}</h4>
                  <div className="d-flex justify-content-between">
                    <Link to={`/details/${order._id}`}>
                      <button className="btn btn-dark">View Details</button>
                    </Link>
                    <button
                      onClick={() => sendIdToModal(order._id)}
                      className="btn btn-danger"
                    >
                      Delete Tour
                    </button>
                  </div>
                  <ModalConfirm
                    handleOrderDelete={handleOrderDelete}
                    show={show}
                    handleClose={handleClose}
                    orderId={orderId}
                  />
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <ModalAlert
        showAlert={showAlert}
        closeAlert={closeAlert}
        alertText={alertText}
      />
    </div>
  );
};

export default DeleteTour;