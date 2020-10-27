import React from "react";
import Fade from 'react-reveal/Fade';

const Innovation = () => {
  return (
    
    <section id="about" class="about">
      
      <div class="container">
     
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="150"
          ><Fade right>
            <img src="media/InnovationImg.png" class="img-fluid" alt="" />
            </Fade>
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>Innovations at CS MIND</h3>
            <p class="font-italic">
              This is the spirit of CSMIND . We strive to bring research to life
              by design thinking , innovations , and incubation to cultivate
              startups and ventures exploring the technology of today , which
              could transform the ways of our present practices in the society ,
              education , management, and industry/professional sectors. We work
              with universities, faculty and talented students and create
              systems for the future .
            </p>
            
            <a href="#" class="read-more">
              Learn More <i class="icofont-long-arrow-right"></i>
            </a>
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
};

export default Innovation;
