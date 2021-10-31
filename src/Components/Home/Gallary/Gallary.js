import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import GallaryItem from "./GallaryItem";

const Gallary = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(true);
      });
  }, []);
  const settings = {
    arrows: false,
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
          slidesToShow: 6,
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
      <div className="bgGrey pt-5">
        <Container className="p-5 text-center">
          <div className="customHorizontalLine"></div>
          <h1 className="fw-light text-uppercase my-4">Gallary</h1>
          <Spinner animation="border" variant="danger" />;
        </Container>
      </div>
    );
  }
  return (
    <div className="bgGrey pt-5">
      <Container className="px-5">
        <div className="customHorizontalLine"></div>
        <h1 className="fw-light text-uppercase my-4">Gallary</h1>
      </Container>
      <Slider {...settings}>
        {images.map((image) => (
          <GallaryItem key={image.key} image={image} />
        ))}
      </Slider>
    </div>
  );
};

export default Gallary;
