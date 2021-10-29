import React from "react";
import Packages from "../Packages/Packages";
import TouristSpots from "../Services/TouristSpots";
import Banner from "./Banner/Banner";
import Gallary from "./Gallary/Gallary";

const Home = () => {
  return (
    <div>
      <Banner />
      <TouristSpots />
      <Packages />
      <Gallary />
    </div>
  );
};

export default Home;
