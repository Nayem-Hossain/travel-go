import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import viewDetailsTopBanner from "../../images/view-details-top-banner.jpg";
import Rating from "react-rating";
import PlaceOrderForm from "../../Components/PlaceOrderForm/PlaceOrderForm";
import "./Booking.css";

const Booking = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [singleService, setSingleService] = useState({});
  useEffect(() => {
    fetch("https://frightful-chupacabra-19042.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    const found = services.find((service) => service._id === serviceId);
    setSingleService(found);
  }, [services, serviceId]);

  return (
    <div>
      <div className="card bg-light text-dark mb-1">
        <img height="300" src={viewDetailsTopBanner} alt="..." />
        <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
          <h1 className="card-title fw-bold text-white">
            Booking Your Best Package
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row ">
          <div className="col-12 col-md-8">
            <div className=" mb-3">
              <img
                src={singleService?.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h1 className="card-title">{singleService?.packageName}</h1>
                <div>
                  <h3>
                    <span className="fw-bold text-danger">
                      ${singleService?.price}
                    </span>
                    <small>/Per Person</small>
                  </h3>
                </div>
                <div>
                  <Rating
                    className="text-warning"
                    initialRating={singleService?.rating}
                    emptySymbol="fas fa-star"
                    fullSymbol="fas text-warning fa-star"
                    readonly
                  />
                  {singleService?.rating} ({singleService?.totalReviews})
                </div>
                <div className="fw-bold card-text mt-3">Overview</div>
                <p className="">{singleService?.description}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            {singleService?.packageName ? (
              <div className="card backgrond text-white">
                <h3 className="fw-bold text-center my-3">Book This Package</h3>
                <PlaceOrderForm
                  packageServiceId={serviceId}
                  packageImage={singleService?.img}
                  packageName={singleService?.packageName}
                  price={singleService?.price}
                ></PlaceOrderForm>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
