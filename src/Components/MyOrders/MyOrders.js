import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./myOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://fast-crag-74063.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
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
                    <button
                      onClick={() => handleOrderDelete(order._id)}
                      className="btn btn-danger"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MyOrders;
