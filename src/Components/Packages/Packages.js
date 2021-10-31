import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Spinner } from "react-bootstrap";
import SinglePackage from "./SinglePackage";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  /*
<---------------------------- Fetching Tour Packages from Database ---------------------------->
*/
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
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
      <div className="bgGrey">
        <Container className="p-5 text-center">
          <div className="customHorizontalLine"></div>
          <h1 className="fw-light text-uppercase my-4">Popular Packages</h1>
          <Spinner animation="border" variant="danger" />;
        </Container>
      </div>
    );
  }
  return (
    <div className="bgGrey">
      <Container className="p-5">
        <div className="customHorizontalLine"></div>
        <h1 className="fw-light text-uppercase my-4">Popular Packages</h1>
        <Slider {...settings}>
          {packages.map((singlePackage) => (
            <SinglePackage
              key={singlePackage._id}
              singlePackage={singlePackage}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Packages;
