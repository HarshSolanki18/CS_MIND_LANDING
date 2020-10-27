import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonial from '../components/Testimonial';
import Brands from "../components/Brands";
import Innovation from "../components/Innovation";
import AIM from "../components/AIM";
import CCC from "../components/CCC";


const HomeScreen = () => {
  return (
    <>
      <Header />
      <Hero/>
      
      <Innovation/>
      <AIM/>
      <CCC/>
      <Brands/>
      <Testimonial/>
      <Footer />
    </>
  );
};

export default HomeScreen;
