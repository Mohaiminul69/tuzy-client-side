import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ModalConfirm from "../Modals/ModalConfirm";
import ModalAlert from "../Modals/ModalAlert";
import "./manage.css";

const Manage = () => {
  const [loading, setLoading] = useState(false);
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);
  const handleAlert = () => setShowAlert(true);
  // Confirmation Modal
  // Confirmation Modal
  const [orderId, setOrderId] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orders, setOrders] = useState([]);
  /*
<---------------------------- Fetching All the Bookings from Multiple Users To Manage ---------------------------->
*/
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/manage")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(true);
      });
  }, [orders]);
  /*
<-------------------- Approving the booking and Changing Status by Updating Database -------------------->
*/
  const handleApprove = (id) => {
    const update = { status: true };
    fetch(`https://fast-crag-74063.herokuapp.com/approveBooking/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setOrders(orders);
          setAlertText("Booking Approved");
          handleAlert();
        }
      });
  };
  /*
<----------------------- Canceling Booking made by Users and deleting from database ----------------------->
*/
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
  const sendIdToModal = (id) => {
    setOrderId(id);
    handleShow();
  };
  if (!loading) {
    return (
      <div className="bgManageBookings py-5">
        <h1 className="display-2 my-5">Manage Bookings</h1>
        <Container className="text-center">
          <Spinner animation="border" variant="danger" />;
        </Container>
      </div>
    );
  }
  return (
    <div className="bgManageBookings py-5">
      <h1 className="display-2 my-5">Manage Bookings</h1>
      <Container>
        <div className="manageBookings">
          <h4 className="mb-3 display-5 text-center">Booking List</h4>
          {orders.map((order) => (
            <div key={order._id} className="bookingItem mb-3">
              <div>
                <img src={order.img} alt="" />
                <h5 className="display-6">{order.name}</h5>
                <h5>{order.username}</h5>
                <p>{order.email}</p>
                <h5>
                  Status:{" "}
                  {order.status === false ? (
                    <span className="text-warning">Pending</span>
                  ) : (
                    <span className="text-success">Approved</span>
                  )}
                </h5>
                <button
                  onClick={() => handleApprove(order._id)}
                  className="btn btn-warning btn-sm me-3 mt-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => sendIdToModal(order._id)}
                  className="btn btn-danger btn-sm mt-2"
                >
                  Cancel
                </button>
              </div>
              <ModalAlert
                showAlert={showAlert}
                closeAlert={closeAlert}
                alertText={alertText}
              />
              <ModalConfirm
                handleOrderDelete={handleOrderDelete}
                show={show}
                handleClose={handleClose}
                orderId={orderId}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Manage;
