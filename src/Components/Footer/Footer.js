import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="bgBlack text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} className="mb-4">
            <img
              className="footerLogo"
              src="https://i.ibb.co/2tD3QrN/logo.png"
              alt=""
            />
            <p className="mt-2">
              Tuzy making tourism fun and easy for everyone. <br /> If you are
              traveler who loves to travel, we are the agency for you.
            </p>
            <ul className="follow-links">
              <li>
                <Link to="#">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-4">
            <div className="footer-bottom-div mt-3">
              <h5 className="mb-3">Contact Us</h5>
              <ul className="list">
                <li>SUN - SAT 9AM - 10PM BST</li>
                <li>
                  <Link to="#">ONLINE form</Link>
                </li>
                <li>
                  <Link to="#">whatsapp +88 0179 9999 09</Link>
                </li>
                <li>
                  <Link to="#">contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="gallary mb-4">
            <div className="footer-bottom-div mt-3">
              <h5 className="mb-3">Gallary</h5>
              <Row>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/86prszs/pexels-timur-kozmenko-2474689.jpg"
                    alt=""
                  />
                </Col>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/StjJyYg/pexels-davi-pimentel-2064827.jpg"
                    alt=""
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/JryB98D/15-155705-taj-mahal-india-travel-destinations-architecture-taj-mahal.jpg"
                    alt=""
                  />
                </Col>
                <Col xm={6}>
                  <img
                    src="https://i.ibb.co/zmHw3d2/pexels-nikita-khandelwal-800532.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3} className="d-flex align-items-start mb-4">
            <div className="worldMap footer-bottom-div mt-3">
              <h5 className="mb-3">World Wide Tour</h5>
              <img src="https://i.ibb.co/S7ZjSDp/988914939-PO-big.jpg" alt="" />
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-2">
          <p className="text-center">
            Site managed by Tuzy.co. Copyright &copy; Tuzy.co Limited 2021. All
            rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
