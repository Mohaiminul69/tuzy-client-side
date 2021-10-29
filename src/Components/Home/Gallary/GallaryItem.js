import React from "react";
import "./gallaryItem.css";

const GallaryItem = ({ image }) => {
  const { img } = image;
  return (
    <div className="gallaryImgDiv">
      <img src={img} alt="" />
    </div>
  );
};

export default GallaryItem;
