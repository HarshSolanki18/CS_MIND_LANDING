import React from "react";
import Fade from 'react-reveal/Fade';

const AIM = () => {
  return (
      
    <section id="about" class="about">
      <div class="container">
     
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
              <Fade right>
            <img src="media/Aim.png" class="img-fluid" alt="" />
            </Fade>
          </div>
          <div
            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>AIM : Academias Innovations Mentoring </h3>
            <p class="font-italic">
              Today the academics – the professional education and underlying
              systems are facing disruptive challenges . New methods/models are
              evolving in education, new courses are coming into existence and
              opening up unprecedented professional opportunities for the youth.
              One of the prominent opportunity is to create your own future
              through creativity , innovations and incubation. CS MIND is
              available to meet such challenges along with the universities ,
              and industry professionals in a win-win environment .
            </p>
            <ul>
              <li>
                <i class="icofont-check-circled"></i>
                Preparing for the new education paradigm
              </li>
              <li>
                <i class="icofont-check-circled"></i> Thrusting the research to
                the ventures
              </li>
              <li>
                <i class="icofont-check-circled"></i> Designing thinking to
                Products realization
              </li>
            </ul>
            <a href="#" class="read-more">
              Learn More <i class="icofont-long-arrow-right"></i>
            </a>
          </div>
        </div>
        
      </div>
    </section>
    
  );
};

export default AIM;
