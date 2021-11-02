import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import Service from "../../Components/Service/Service";
import UserReview from "../../Components/UserReview/UserReview";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://frightful-chupacabra-19042.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  });

  return (
    <div className="mb-5">
      <section
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item banner1 active py-5">
            <div className="text-center caption py-2 my-5">
              <div className=" my-5">
                <h3>Lets plan your best vacation</h3>
                <h5>Where Camping Adventures Begin</h5>
                <button className="btn brdr font-color5 my-5">Book Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item banner2 py-5">
            <div className="text-center caption py-2 my-5">
              <div className=" my-5">
                <h3>Explore the world with us</h3>
                <h5>Where Your Adventures Begin</h5>
                <button className="btn brdr font-color5 my-5">Book Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item banner3 py-5">
            <div className="text-center caption py-2  my-5">
              <div className=" my-5">
                <h3>Lets plan amazing tour</h3>
                <h5>Where Camping Adventures Begin</h5>
                <button className="btn brdr font-color5 my-5">Book Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item banner4 py-5">
            <div className="text-center caption py-2  my-5">
              <div className=" my-5">
                <h3>Lets plan amazing tour</h3>
                <h5>Where Camping Adventures Begin</h5>
                <button className="btn brdr font-color5 my-5">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>

      {/* 2. section */}
      <section className="container d-flex justify-content-center">
        <div className="w-75 bg-danger position">
          <div className="px-5 py-5">
            <form className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control py-2"
                  id="inputCity"
                  placeholder="Where to....."
                />
              </div>

              <div className="col-md-3">
                <input
                  type="date"
                  className="form-control py-2"
                  id="inputDate"
                />
              </div>

              <div className="col-md-3">
                <select id="inputCategory" className="form-select py-2">
                  <option selected>Travel Categories...</option>
                  <option value="city tour">city tour</option>
                  <option value="vacation tour">vacation tour</option>
                  <option value="couple tour">couple tour</option>
                  <option value="advanture tour">advanture tour</option>
                  <option value="group tour">group tour</option>
                </select>
              </div>

              <div className="col-md-2">
                <button
                  className="btn btn-dark form-control py-2"
                  type="submit"
                >
                  <i class="fas fa-search-location me-3"></i>Find Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div>
          <div className="text-center">
            <p className="text-warning">FEATURED TOURS</p>
            <h1>Most Popular Tours</h1>
          </div>
          <Container>
            <Row xs={1} sm={2} md={3} className="g-2">
              {services.map((data) => (
                <Service key={data._id} info={data}></Service>
              ))}
            </Row>
          </Container>
        </div>
      </section>

      <section className="extra-background mb-5">
        <div className="container mb-5">
          <h5 className="mt-5 text-orgarge text-center">Why You Choose Us?</h5>
          <h1 className="text-center text-size mb-5">
            Why Are You Travel With TravelGo !
          </h1>
          <WhyChooseUs></WhyChooseUs>
        </div>
      </section>

      {/*user review section */}
      <section>
        <div className="container">
          <h5 className="text-orgarge text-center">Reviews About Our Agency</h5>
          <h3 className="text-center text-size">
            What Our Traveller Says <br /> About Us
          </h3>
          <UserReview></UserReview>
        </div>
      </section>
    </div>
  );
};

export default Home;
