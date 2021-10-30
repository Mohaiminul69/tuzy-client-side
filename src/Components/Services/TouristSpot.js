import React from "react";
import { Link } from "react-router-dom";
import "./touristSpot.css";

const TouristSpot = ({ location }) => {
  const { name, img, shortDescription, _id } = location;
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
      <Link to={`/details/${_id}`}>
        <button className="btn btn-danger btn-sm">Book Now</button>
      </Link>
    </div>
  );
};

export default TouristSpot;
