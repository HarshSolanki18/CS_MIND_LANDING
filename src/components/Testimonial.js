import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <>
      <div class="testimonial-text section-text">
        <h2 class="testimonial-header sub-heading">
          Trusted by Thousands of Happy Customer
        </h2>
        <p class="testimonial-desc sub-desc">
          Hear the stories of our customers who have joined us with great
          pleasure when using these awesome features.
        </p>
      </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="media/people/person-1.svg" alt="person1" />
          <div className="myCarousel">
            <h3>Yessica Christy</h3>
            <h4>IBM</h4>
            <p>
            Wow... I am very happy with this Venture. It turned out to be more
              than my expectations and so far there have been no problems.
              CSMIND is the best
            </p>
          </div>
        </div>

        <div>
          <img src="media/people/person-2.svg" alt="person2" />
          <div className="myCarousel">
            <h3>Viezh Robert</h3>
            <h4>Warsaw, Poland</h4>
            <p>
              "Wow... I am very happy with this Venture. It turned out to be more
              than my expectations and so far there have been no problems.
              CSMIND is the best"
            </p>
          </div>
        </div>

        <div>
          <img src="media/people/person-3.svg" alt="person3" />
          <div className="myCarousel">
            <h3>Kim Young  Jou</h3>
            <h4>China</h4>
            <p>
            Wow... I am very happy with this Venture. It turned out to be more
              than my expectations and so far there have been no problems.
              CSMIND is the best
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}
