import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./detailsView.css";
import useAuth from "./../../Hooks/useAuth";
import ModalAlert from "../Modals/ModalAlert";

const DetailsView = () => {
  const [loading, setLoading] = useState(false);
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);
  const handleAlert = () => setShowAlert(true);
  const { user } = useAuth();
  const { id } = useParams();
  const [location, setLocation] = useState({});
  useEffect(() => {
    fetch(`https://fast-crag-74063.herokuapp.com/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoading(true);
      });
  }, [id]);
  const { name, img, shortDescription, price, description } = location;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    delete location._id;
    location.email = user?.email;
    location.username = data.name;
    location.phone = data.phone;
    location.status = false;
    location.address = data.address;
    location.creditCard = data.creditCard;
    fetch("https://fast-crag-74063.herokuapp.com/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(location),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setAlertText("Booking Processed");
          handleAlert();
          reset();
        }
      });
  };
  if (!loading) {
    return (
      <div className="bgMyOrders py-5">
        <Container className="text-center">
          <Spinner animation="border" variant="danger" />;
        </Container>
      </div>
    );
  }
  return (
    <div
      style={{
        background: `url("${img}")
    no-repeat center center/cover`,
      }}
      className="detailsViewPage py-5"
    >
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={12} lg={4} className="mb-3">
            <img src={img} alt="" />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <div className="detailsCard">
              {shortDescription ? (
                <div>
                  <h1 className="display-2">{name}</h1>
                  <p className="fw-light fs-5">{shortDescription}</p>
                  <p className="fw-light">{description}</p>
                  <p className="fw-light fs-3">
                    Visit {name} for only
                    <span className="text-warning"> ${price}</span>
                  </p>
                </div>
              ) : (
                <div>
                  <h1 className="display-5">{name}</h1>
                  <p className="fw-light fs-5">{description}</p>
                  <p className="fw-light fs-3">
                    Get our {name} for only
                    <span className="text-warning"> ${price}</span>
                  </p>
                </div>
              )}
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <div className="detailsCard">
              <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <h6 className="fw-light fs-5 mb-3">
                  Please fill up the form to book tour
                </h6>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="form-control mb-3"
                  defaultValue={user.displayName}
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="form-control mb-3"
                  defaultValue={user.email}
                />
                <input
                  {...register("date")}
                  placeholder="Date"
                  className="form-control mb-3"
                  type="date"
                />
                <input
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  className="form-control mb-3"
                  type="number"
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="form-control mb-3"
                />
                <input
                  {...register("creditCard", { required: true })}
                  placeholder="Credit Card Number"
                  className="form-control mb-3"
                  type="number"
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit" className="btn btn-danger">
                  Book Now
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalAlert
        showAlert={showAlert}
        closeAlert={closeAlert}
        alertText={alertText}
      />
    </div>
  );
};

export default DetailsView;
