import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Footer from "./Footer";
import FixedButton from "./FixedButton";
import HomePage from "./Letter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FixedButton />
      <Slider />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
