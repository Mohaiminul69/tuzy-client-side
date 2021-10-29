import React from "react";
import "./touristSpot.css";

const TouristSpot = ({ location }) => {
  const { name, img, shortDescription } = location;
  return (
    <div
      style={{
        background: `url("${img}")
    no-repeat center center/cover`,
      }}
      className="locationCard"
    >
      <h4>{name}</h4>
      <p>{shortDescription}</p>
      <button className="btn btn-danger btn-sm">Book Now</button>
    </div>
  );
};

export default TouristSpot;
