import React from "react";
import Slider from "../components/Slider";
import Footer_vn from "../components/Footer_vn";
import FixedButton from "../components/FixedButton";
import Letter_vn from "../components/Letter_vn";

const Home_vn = () => {
  return (
    <div>
      <FixedButton />
      <Slider />
      <Letter_vn />
      <Footer_vn />
    </div>
  );
};

export default Home_vn;
