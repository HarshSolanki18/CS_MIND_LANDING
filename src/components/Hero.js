import React from "react";
import HomeFeatureSection from "./HomeFeatureSection";
import Stats from "./Stats";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <main>
      <div class="body-overlay"></div>
      <div class="sec sec-2">
        <div class="wrapper">
          <section id="about" class="cta">
            <div class="cta-info">
              <div class="cta-text">
                <h1 class="cta-text-header">
                  Venturing Technology Innovations for  <span> <Pulse>Make in India.</Pulse></span>
                </h1>
                <p class="cta-text-desc sub-desc">
                  Provide a network for all your needs with ease and fun using
                  <span> CSMIND</span> and discover interesting features from
                  us.
                </p>
              </div>
              <div class="cta-btn-ctr">
               <a href="#innovation"> <button class="cta-btn btn-dark">Get Started</button></a>
              </div>
            </div>
            <div class="cta-img-ctr">
              <Fade right>
              <img src="SVG/meeting.svg"  alt="hero imah" />
             </Fade>
            </div>
            
            
          </section>
          <Stats />
          <HomeFeatureSection/>
        </div>
      </div>
    </main>
  );
};

export default Hero;
