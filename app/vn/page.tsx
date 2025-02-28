import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import FixedButton from "../components/FixedButton";
import HomePage from "../components/Letter";
import Link from "next/link";
import Image from "next/image";
import en from "../images/us_flag.png";
import vn from "../images/vn_flag.png";

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
