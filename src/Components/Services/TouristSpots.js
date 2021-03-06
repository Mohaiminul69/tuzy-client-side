import React, { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "./touristSpots.css";

const TouristSpots = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  /*
<---------------------------- Fetching Tour Data from database ---------------------------->
*/
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setLoading(true);
      });
  }, []);
  /*
<---------------------------- Slider Data ---------------------------->
*/
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  if (!loading) {
    return (
      <div className="bgGrey">
        <Container className="p-5 text-center">
          <div className="customHorizontalLine"></div>
          <h1 className="fw-light text-uppercase my-4">Popular Tours</h1>
          <Spinner animation="border" variant="danger" />;
        </Container>
      </div>
    );
  }
  return (
    <div className="bgGrey">
      <Container className="p-5">
        <div className="customHorizontalLine"></div>
        <h1 className="fw-light text-uppercase my-4">Popular Tours</h1>
        <Slider {...settings}>
          {locations.map((location) => (
            <TouristSpot key={location._id} location={location} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default TouristSpots;
