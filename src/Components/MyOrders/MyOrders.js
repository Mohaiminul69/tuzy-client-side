import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ModalConfirm from "../Modals/ModalConfirm";
import ModalAlert from "../Modals/ModalAlert";
import "./myOrders.css";

const MyOrders = () => {
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);
  const handleAlert = () => setShowAlert(true);
  // Confirmation Modal
  // Confirmation Modal
  // Confirmation Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://fast-crag-74063.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  const handleOrderDelete = (id) => {
    handleClose();
    fetch(`https://fast-crag-74063.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
          setAlertText("Booking Canceled");
          handleAlert();
        }
      });
  };
  return (
    <div className="bgMyOrders py-5">
      <h1 className="display-2 my-5">My Orders</h1>
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
                  <p>
                    Order Status:{" "}
                    {order.status === false ? (
                      <span className="text-warning">Pending</span>
                    ) : (
                      <span className="text-success">Approved</span>
                    )}
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/orderDetails/${order._id}`}>
                      <button className="btn btn-dark">View Details</button>
                    </Link>
                    <button onClick={handleShow} className="btn btn-danger">
                      Cancel Booking
                    </button>
                  </div>
                  <ModalConfirm
                    handleOrderDelete={handleOrderDelete}
                    show={show}
                    handleClose={handleClose}
                    order={order}
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

export default MyOrders;
