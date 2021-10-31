import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./manage.css";

const Manage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/manage")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
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
          alert("Booking Approved");
          setOrders(orders);
        }
      });
  };
  const handleOrderDelete = (id) => {
    var cancel = window.confirm("Are you sure you want to cancel?");
    if (cancel) {
      fetch(`https://fast-crag-74063.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Booking Canceled Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
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
                  onClick={() => handleOrderDelete(order._id)}
                  className="btn btn-danger btn-sm mt-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Manage;
