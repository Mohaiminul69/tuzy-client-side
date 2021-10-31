import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

const OrderDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [location, setLocation] = useState({});
  useEffect(() => {
    fetch(`https://fast-crag-74063.herokuapp.com/orderDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoading(true);
      });
  }, [id]);
  const { name, img, shortDescription, price, description, status } = location;
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
          <Col sm={12} md={6} className="mb-3">
            <img src={img} alt="" />
          </Col>
          <Col sm={12} md={6} className="mb-3">
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
                  <p>
                    Order Status:{" "}
                    {status === false ? (
                      <span className="text-warning">Pending</span>
                    ) : (
                      <span className="text-success">Approved</span>
                    )}
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
                  <p>
                    Order Status:{" "}
                    {status === false ? (
                      <span className="text-warning">Pending</span>
                    ) : (
                      <span className="text-success">Approved</span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderDetails;
