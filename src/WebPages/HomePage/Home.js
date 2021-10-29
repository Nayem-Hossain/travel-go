import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
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
                {/* <label for="inputCity" className="form-label"></label> */}
                <input
                  type="text"
                  className="form-control py-2"
                  id="inputCity"
                  placeholder="Where to....."
                />
              </div>

              <div className="col-md-3">
                {/* <label for="inputDate" className="form-label"></label> */}
                <input
                  type="date"
                  className="form-control py-2"
                  id="inputDate"
                />
              </div>

              <div className="col-md-3">
                {/* <label for="inputCategory" className="form-label"></label> */}
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
                  {" "}
                  <i class="fas fa-search-location me-3"></i>Find Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
