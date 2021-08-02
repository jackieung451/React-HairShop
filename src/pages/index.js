import React from "react";
import Hero from "../components/Hero";
import Listings from "../components/Listings";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <Listings />
    </>
  );
};

export default Home;
