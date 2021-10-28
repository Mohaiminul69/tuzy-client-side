import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://fast-crag-74063.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  console.log(locations);
  return (
    <div>
      <h1>HEllo</h1>
    </div>
  );
};

export default Home;
