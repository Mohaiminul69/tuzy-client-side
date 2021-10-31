import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./review.css";

const Review = () => {
  const settings = {
    arrows: false,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="bgGrey pt-5">
      <Container className="px-5">
        <div className="customHorizontalLine"></div>
        <h1 className="fw-light text-uppercase my-4">Our Review</h1>
        <Slider {...settings}>
          <div className="reviewCard">
            <img
              src="https://i.ibb.co/q14zSQh/pexels-amine-m-siouri-2055556.jpg"
              alt=""
            />
            <h1 className="display-6 mt-2">Zahid Saikat</h1>
            <q className="text-muted fs-5 text-center">
              I had a great time travelling with Tuzy.
              <br />
              That was once in a life time Hicking opportunity.
            </q>
          </div>
          <div className="reviewCard">
            <img
              src="https://i.ibb.co/0qQ4Ppv/pexels-andrea-piacquadio-3777017.jpg"
              alt=""
            />
            <h1 className="display-6 mt-2">Mushfiq Ali</h1>
            <q className="text-muted fs-5 text-center">
              I had a great time travelling with Tuzy.
              <br />
              That was once in a life time camping opportunity.
            </q>
          </div>
          <div className="reviewCard">
            <img
              src="https://i.ibb.co/txDKxnp/pexels-yogendra-singh-3971608.jpg"
              alt=""
            />
            <h1 className="display-6 mt-2">Shoron Rahman</h1>
            <q className="text-muted fs-5 text-center">
              I had a great time travelling with Tuzy.
              <br />
              That was once in a life time tour opportunity.
            </q>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Review;
