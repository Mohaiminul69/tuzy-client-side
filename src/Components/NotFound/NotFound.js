import React from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="not-found-background">
      <Container className="notFoundDiv">
        <h1 className="display-1 text-danger">404</h1>
        <h1 className="display-4">Destination Not Found</h1>
        <h1 className="fw-light">Looks like you are lost in the woods !!</h1>
        <div className="my-3">
          <Link to="/">
            <button className="btn btn-danger me-5">Homepage</button>
          </Link>
          <button onClick={handleBack} className="btn btn-danger">
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
