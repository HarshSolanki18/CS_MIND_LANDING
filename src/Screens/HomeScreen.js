import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonial from '../components/Testimonial';


const HomeScreen = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Testimonial/>
      <Footer />
    </>
  );
};

export default HomeScreen;
