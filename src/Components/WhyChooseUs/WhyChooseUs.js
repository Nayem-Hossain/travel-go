import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="container-fluid card-background my-3">
      <div className="row align-items-center ">
        <div className="g-5">
          <div className="d-flex flex-column flex-lg-row g-5 content pb-5">
            <div className="col-lg-3 col-12 d-flex justify-content-center">
              <div className="text-center ">
                <i class="fas fa-user icon"></i>
                <h1 className="text-followers fcolor">1000+</h1>
                <h4 className="text-style fcolor">Our World Wide Guide</h4>
              </div>
            </div>

            <div className="col-lg-3 col-12 d-flex mb-sm-3 justify-content-center">
              <div className="text-center ">
                <i class="far fa-handshake icon"></i>
                <h1 className="text-followers fcolor">100%</h1>
                <h4 className="text-style fcolor">Trusted Travel Agency</h4>
              </div>
            </div>

            <div className="col-lg-3 col-12 d-flex justify-content-center">
              <div className="text-center">
                <i class="far fa-smile-beam icon"></i>
                <h1 className="text-followers fcolor">99%</h1>
                <h4 className="text-style fcolor">Of Our Traveller Happy</h4>
              </div>
            </div>

            <div className="col-lg-3 col-12 d-flex justify-content-center">
              <div className="text-center">
                <i class="far fa-calendar-alt icon"></i>
                <h1 className="text-followers fcolor">22+</h1>
                <h4 className="text-style fcolor">
                  Years of Travel Experience
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
