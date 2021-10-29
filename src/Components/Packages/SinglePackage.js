import React from "react";
import "./singlePackage.css";

const SinglePackage = ({ singlePackage }) => {
  const { name, img, description } = singlePackage;
  return (
    <div className="singlePackageCard">
      <img src={img} alt="" />
      <div className="px-3 pb-3">
        <h4 className="text-uppercase my-3">{name}</h4>
        <p className="text-muted">{description.slice(0, 80)}...</p>
        <button className="btn btn-danger">Book Now</button>
      </div>
    </div>
  );
};

export default SinglePackage;
