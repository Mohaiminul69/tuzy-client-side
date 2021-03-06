import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ModalAlert from "../Modals/ModalAlert";
import "./addTour.css";

const AddTour = () => {
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);
  const handleAlert = () => setShowAlert(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://fast-crag-74063.herokuapp.com/addTour", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAlertText("Tour Created");
          handleAlert();
          reset();
        }
      });
  };
  return (
    <div className="bgAddTour py-5">
      <h1 className="display-2 mt-5">Add Tour</h1>
      <Container className="mt-2">
        <Row>
          <Col sm={12} md={3}>
            <Link to="/deleteTour">
              <button className="btn btn-danger">Manage All Tours</button>
            </Link>
          </Col>
          <Col sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)} className="AddTourForm">
              <h6 className="fw-light fs-5 mb-3">
                Please fill up the form to Add Tour
              </h6>
              <input
                {...register("name", { required: true })}
                placeholder="Tour/Package Name"
                className="form-control mb-3"
              />
              <select {...register("type")} className="form-control mb-3">
                <option value="tour">Tour</option>
                <option value="package">Package</option>
              </select>
              <input
                {...register("price", { required: true })}
                placeholder="Tour/Package Price"
                className="form-control mb-3"
                type="number"
              />
              <input
                {...register("shortDescription", { required: true })}
                placeholder="Short Description"
                className="form-control mb-3"
              />
              <input
                {...register("description", { required: true })}
                placeholder="Description"
                className="form-control mb-3"
              />
              <input
                {...register("img", { required: true })}
                placeholder="Tour/Package Image URL"
                className="form-control mb-3"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <button type="submit" className="btn btn-danger">
                Add Tour
              </button>
            </form>
          </Col>
          <Col sm={12} md={3}></Col>
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

export default AddTour;
